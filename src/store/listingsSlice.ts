import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Listing, CurrencySymbol } from "../models";
import defaults from "../config/defaults.json";
import { getMaxId } from "../services";

interface ListingsState {
  userListings: Listing[];
  availableCurrencySymbols: CurrencySymbol[];
  maxId: number;
  selectedListing: Listing | null;
  activeUser: string | null;
}

const initialState: ListingsState = {
  userListings: [],
  availableCurrencySymbols: defaults.AVAILABLE_CURRENCIES as CurrencySymbol[],
  maxId: 0,
  selectedListing: null,
  activeUser: null,
};

// auto-select the first item
initialState.selectedListing = initialState.userListings[0];

export const slice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    setListings: (state, action: PayloadAction<Listing[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userListings = action.payload;
      state.maxId = getMaxId(action.payload);
    },
    addListing: (state, action: PayloadAction<Listing>) => {
      state.maxId = action.payload.id;
      state.userListings.push(action.payload);
    },
    removeListing: (state, action: PayloadAction<number>) => {
      state.userListings = state.userListings.filter(
        (listing) => listing.id !== action.payload
      );
    },
    selectListing: (state, action: PayloadAction<Listing|null>) => {
      state.selectedListing = action.payload;
    },
    setActiveUser: (state, action: PayloadAction<string|null>) => {
      state.activeUser = action.payload;
    },
  },
});

export const {
  setListings,
  addListing,
  selectListing,
  removeListing,
  setActiveUser,
} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/*
export const getCurrencyRates = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
*/

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.listings.value)`
export const selectUserListings = (state: RootState): Listing[] =>
  state.listings.userListings;
export const selectUserListing = (state: RootState): Listing | null =>
  state.listings.selectedListing;
export const selectCurrencySymbols = (state: RootState): CurrencySymbol[] =>
  state.listings.availableCurrencySymbols;
export const selectActiveUser = (state: RootState): string | null =>
  state.listings.activeUser;
export const selectMaxListingId = (state: RootState): number =>
  state.listings.maxId;

export default slice.reducer;

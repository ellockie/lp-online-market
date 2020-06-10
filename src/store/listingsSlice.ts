import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Item, CurrencySymbol } from "../models";
import defaults from "../config/defaults.json";
import { getMaxId } from "../services";

interface ListingsState {
  userListings: Item[];
  availableCurrencySymbols: CurrencySymbol[];
  maxId: number;
}

const initialState: ListingsState = {
  userListings: [
    {
      id: 1,
      itemName: "Amazing Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 123,
      currency: "GBP",
    },
    {
      id: 2,
      itemName: "Fantastic Item",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 44,
      currency: "JPY",
    },
    {
      id: 3,
      itemName: "Wonderful Thingy",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 723,
      currency: "EUR",
    },
  ],
  availableCurrencySymbols: defaults.AVAILABLE_CURRENCIES as CurrencySymbol[],
  maxId: 0,
};

// sets max id
initialState.maxId = getMaxId(initialState.userListings);

export const slice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    addListing: (state, action: PayloadAction<Item>) => {
      console.log("action:", action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.maxId += 1;
      state.userListings.push(
        Object.assign({ ...action.payload, id: state.maxId })
      );
    },
    removeListing: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userListings = state.userListings.filter(
        (listing) => listing.id !== action.payload
      );
    },
  },
});

export const { addListing, removeListing } = slice.actions;

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
export const selectUserListings = (state: RootState): Item[] =>
  state.listings.userListings;
export const selectUserListing = (state: RootState): Item => state.listings.userListings[0];
export const selectCurrencySymbols = (state: RootState): CurrencySymbol[] =>
  state.listings.availableCurrencySymbols;
export const selectMaxId = (state: RootState): number => state.listings.maxId;

export default slice.reducer;

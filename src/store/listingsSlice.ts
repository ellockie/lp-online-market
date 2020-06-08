import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { Item } from '../models';

interface ListingsState {
  userListings: Item[];
}

const initialState: ListingsState = {
  userListings: [
    {
      id: 1,
      name: "Amazing Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 123,
      currency: { symbol: "GBP", rateEUR: 1 },
    },
    {
      id: 2,
      name: "Fantastic Item",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 44,
      currency: { symbol: "JPY", rateEUR: 130 },
    },
    {
      id: 3,
      name: "Wonderful Thingy",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 723,
      currency: { symbol: "EUR", rateEUR: 4 },
    },
  ]
};

export const slice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    addListing: (state, action: PayloadAction<Item>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userListings.push(action.payload);
    },
    removeListing: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userListings = state.userListings.filter(listing => listing.id !== action.payload);
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
export const selectUserListings = (state: RootState): Item[] => state.listings.userListings;

export default slice.reducer;

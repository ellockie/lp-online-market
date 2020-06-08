import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listingsReducer from './listingsSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

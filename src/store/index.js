import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import counterReducer from './counterSlice'
import kanyeReducer from './kanyeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
  },
});

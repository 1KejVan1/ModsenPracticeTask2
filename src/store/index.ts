import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./bookSlice";
import favouriteBooksReducer from "./favouriteBooksSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
    favouriteBooks: favouriteBooksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

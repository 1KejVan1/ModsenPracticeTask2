import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";
import searchReducer from "./searchSlice";
import favouriteBooksReducer from "./favouriteBooksSlice";

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

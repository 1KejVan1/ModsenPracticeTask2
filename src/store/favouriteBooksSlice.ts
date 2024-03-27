import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IBook } from "../interfaces/IBook";
import { IFavouriteBooks } from "../interfaces/IFavouriteBooks";

const initialState: IFavouriteBooks = {
  books: [],
};

const favouriteBooksSlice = createSlice({
  name: "favouriteBooks",
  initialState,
  reducers: {
    addFavouriteBook(state, action: PayloadAction<IBook>) {
      state.books.push(action.payload);
    },
    removeFavouriteBook(state, action: PayloadAction<string>) {
      return {
        books: state.books.filter((item) => item.id !== action.payload),
      };
    },
    addFavouriteBooks(state, action: PayloadAction<IBook[]>) {
      return {
        books: action.payload,
      };
    },
  },
});

export const { addFavouriteBook, removeFavouriteBook, addFavouriteBooks } =
  favouriteBooksSlice.actions;
export default favouriteBooksSlice.reducer;

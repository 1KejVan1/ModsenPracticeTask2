import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavouriteBooks } from "../interfaces/IFavouriteBooks";
import { IBook } from "../interfaces/IBook";

const initialState: IFavouriteBooks = {
  books: [],
  quantity: 0,
};

const favouriteBooksSlice = createSlice({
  name: "favouriteBooks",
  initialState,
  reducers: {
    addFavouriteBook(state, action: PayloadAction<IBook>) {
      state.books.push(action.payload);
      state.quantity++;
    },
    removeFavouriteBook(state, action: PayloadAction<string>) {
      return {
        books: state.books.filter((item) => item.id !== action.payload),
        quantity: state.quantity - 1 < 0 ? 0 : state.quantity - 1,
      };
    },
  },
});

export const { addFavouriteBook, removeFavouriteBook } =
  favouriteBooksSlice.actions;
export default favouriteBooksSlice.reducer;

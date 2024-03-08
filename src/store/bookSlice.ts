import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../interfaces/IBook";

const initialState: IBook[] = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<IBook[]>) => {
      return [...state, ...action.payload];
    },
    resetBooks: (state, action: PayloadAction<IBook[]>) => {
      return [...action.payload];
    },
  },
});

export const { addBooks, resetBooks } = booksSlice.actions;

export default booksSlice.reducer;

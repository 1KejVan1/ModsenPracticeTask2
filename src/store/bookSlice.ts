import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IBooks } from "../interfaces/IBook";

const initialState: IBooks = {
  books: [],
  quantity_items: undefined,
  isLoaded: undefined,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<IBooks>) => {
      return {
        ...state,
        books: state.books.concat(action.payload.books),
      };
    },
    resetBooks: (state, action: PayloadAction<IBooks>) => {
      return {
        ...state,
        books: action.payload.books,
        quantity_items: action.payload.quantity_items,
      };
    },
    changeLoadStatus: (state, action: PayloadAction<boolean | undefined>) => {
      return { ...state, isLoaded: action.payload };
    },
  },
});

export const { addBooks, resetBooks, changeLoadStatus } = booksSlice.actions;

export default booksSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ISearch } from "../interfaces/ISearch";

const initialState: ISearch = {
  searchText: "",
  sortingBy: "relevance",
  startIndex: 0,
  category: "all",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      return { ...state, searchText: action.payload };
    },
    setSort: (state, action: PayloadAction<string>) => {
      return { ...state, sortingBy: action.payload };
    },
    setCategory: (state, action: PayloadAction<string>) => {
      return { ...state, category: action.payload };
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      return { ...state, startIndex: action.payload };
    },
  },
});

export const { setText, setCategory, setSort, setStartIndex } =
  searchSlice.actions;

export default searchSlice.reducer;

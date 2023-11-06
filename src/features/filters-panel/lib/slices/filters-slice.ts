import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FiltersType = {
  id: number;
  name: string;
};

type State = {
  author: string;
  authorId: number;
  location: string;
  locationId: number;
  createdFromValue: string;
  createdBeforeValue: string;
  page: number;
  valueSearch: string;
};

const initialState: State = {
  author: "Author",
  authorId: 0,
  locationId: 0,
  location: "Location",
  createdFromValue: "",
  createdBeforeValue: "",
  page: 1,
  valueSearch: "",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setAuthor: (state, action: PayloadAction<{ id: number; name: string }>) => {
      state.author = action.payload.name;
      state.authorId = action.payload.id;
    },
    setLocation: (
      state,
      action: PayloadAction<{ id: number; location: string }>
    ) => {
      state.location = action.payload.location;
      state.locationId = action.payload.id;
    },
    setCreatedFromValue: (state, action: PayloadAction<string>) => {
      state.createdFromValue = action.payload;
    },
    setCreatedBeforeValue: (state, action: PayloadAction<string>) => {
      state.createdBeforeValue = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },
    setAuthorId: (state, action: PayloadAction<number>) => {
      state.authorId = action.payload;
    },
  },
});

export const {
  setAuthor,
  setLocation,
  setCreatedFromValue,
  setCreatedBeforeValue,
  setCurrentPage,
  setSearch,
  setAuthorId,
} = sortSlice.actions;

export default sortSlice.reducer;

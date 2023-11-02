import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  author: string;
  location: string;
  created: string;
};

const initialState: State = {
  author: "Author",
  location: "Location",
  created: "Created",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setCreated: (state, action: PayloadAction<string>) => {
      state.created = action.payload;
    },
  },
});

export const { setAuthor, setLocation, setCreated } = sortSlice.actions;

export default sortSlice.reducer;

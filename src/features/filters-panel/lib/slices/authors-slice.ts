import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthorType, fetchAuthors } from "../service/authors-fetch";

type AuthorsState = {
  authrorsItems: AuthorType[];
  status: "error" | "loading" | "success";
};

const initialState: AuthorsState = {
  authrorsItems: [],
  status: "loading",
};

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAuthors.fulfilled,
        (state, action: PayloadAction<AuthorType[]>) => {
          state.status = "success";
          state.authrorsItems = action.payload;
        }
      )
      .addCase(fetchAuthors.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default authorsSlice.reducer;

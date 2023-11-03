import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAuthors } from "../service/authors-fetch";
import { FilterType } from "@/shared/types/filter-type";

type AuthorsState = {
  authrorsItems: FilterType[];
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
        (state, action: PayloadAction<FilterType[]>) => {
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

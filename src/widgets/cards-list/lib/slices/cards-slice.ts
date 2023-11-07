import { createSlice } from "@reduxjs/toolkit";
import { CardType, cardsFetch, itemsCountsFetch } from "../service/cards-fetch";

type CardsState = {
  items: CardType[];
  status: "error" | "loading" | "success";
  totalCount: number;
  itemsPerPage: number;
};

const initialState: CardsState = {
  items: [],
  status: "loading",
  totalCount: 0,
  itemsPerPage: 12,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cardsFetch.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(cardsFetch.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(cardsFetch.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
    builder.addCase(itemsCountsFetch.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(itemsCountsFetch.fulfilled, (state, action) => {
      state.status = "success";
      state.totalCount = action.payload.length;
      console.log(action.payload.length);
    });
    builder.addCase(itemsCountsFetch.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default cardsSlice.reducer;

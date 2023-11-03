import { createSlice } from "@reduxjs/toolkit";
import { CardType, cardsFetch } from "../service/cards-fetch";

type CardsState = {
  items: CardType[];
  status: "error" | "loading" | "success";
};

const initialState: CardsState = {
  items: [],
  status: "loading",
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
  },
});

export default cardsSlice.reducer;

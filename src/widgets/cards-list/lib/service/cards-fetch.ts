import { api } from "@/shared/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type CardType = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};



export const cardsFetch = createAsyncThunk("cards/fetch", async () => {
  const { data } = await api.get<CardType[]>("/paintings");
  return data;
});

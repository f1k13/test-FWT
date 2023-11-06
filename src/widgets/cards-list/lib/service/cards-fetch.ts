import { api } from "@/shared/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type CardType = {
  payload: never[];
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

type ParamsType = {
  page: number;
  createdFromValue: string;
  createdBeforeValue: string;
  authorId: number;
  locationId: number;
  valueSearch: string;
};

export const cardsFetch = createAsyncThunk(
  "cards/fetch",
  async (params: ParamsType) => {
    const {
      page,
      authorId,
      locationId,
      valueSearch,
      createdBeforeValue,
      createdFromValue,
    } = params;
    const { data } = await api.get<CardType[]>(
      `/paintings?_page=${page}&_limit=12&${
        authorId && `authorId=${authorId}`
      }&${locationId && `locationId=${locationId}`}&${
        valueSearch &&
        `q=${valueSearch}&${
          createdFromValue && `created_gte=${createdFromValue}`
        }&${createdBeforeValue && `created_lte=${createdBeforeValue}`}`
      }`
    );
    return data;
  }
);

export const itemsCountsFetch = createAsyncThunk(
  "cards/fetchCount",
  async () => {
    const { data } = await api.get("/paintings");
    return data;
  }
);

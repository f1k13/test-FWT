import { api } from "@/shared/api/api";
import { FilterType } from "@/shared/types/filter-type";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AuthorType = {
  id: number;
  name: string;
};

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async () => {
    const { data } = await api.get<FilterType[]>("/authors");
    return data as AuthorType[];
  }
);

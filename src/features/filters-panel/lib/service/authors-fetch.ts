import { api } from "@/shared/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type AuthorType = {
  id: number;
  name: string;
};

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async () => {
    const { data } = await api.get<AuthorType[]>("/authors");
    return data as AuthorType[];
  }
);

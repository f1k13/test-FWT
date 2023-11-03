import { api } from "@/shared/api/api";
import { FilterType } from "@/shared/types/filter-type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const { data } = await api.get<FilterType[]>("/locations");
    console.log(data);
    return data;
  }
);

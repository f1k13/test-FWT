import { api } from "@/shared/api/api";
import { FilterType } from "@/shared/types/filter-type";
import { createAsyncThunk } from "@reduxjs/toolkit";

type LocationType = {
  id: number;
  location: string;
};

export const fetchLocation = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const { data } = await api.get<FilterType[]>("/locations");
    return data as LocationType[];
  }
);

import { api } from "@/shared/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type LocationType = {
  id: number;
  location: string;
};

export const fetchLocation = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const { data } = await api.get<LocationType[]>("/locations");
    return data as LocationType[];
  }
);

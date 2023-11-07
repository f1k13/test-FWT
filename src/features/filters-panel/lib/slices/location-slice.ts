import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../service/location-fetch";
import { LocationType } from "../service/location-fetch";


type LocationState = {
  locationsItems: LocationType[];
  status: "error" | "loading" | "success";
};

const initialState: LocationState = {
  locationsItems: [],
  status: "loading",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchLocation.fulfilled,
        (state, action: PayloadAction<LocationType[]>) => {
          state.status = "success";
          state.locationsItems = action.payload;
        }
      )
      .addCase(fetchLocation.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default locationSlice.reducer;

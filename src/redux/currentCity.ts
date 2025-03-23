import { createSlice } from "@reduxjs/toolkit";

export const currentCitySlice = createSlice({
  name: "currentCity",
  initialState: { lat: 51.509865, lon: -0.118092 },
  reducers: {
    setCurrentCity: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const { setCurrentCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;

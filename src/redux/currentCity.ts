import { createSlice } from "@reduxjs/toolkit";

export const currentCitySlice = createSlice({
  name: "currentCity",
  initialState: {
    currentCity: "London",
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
});

export const { setCurrentCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;

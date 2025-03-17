import { createSlice } from "@reduxjs/toolkit";

export const currentCitySlice = createSlice({
  name: "currentCity",
  initialState: "London",
  reducers: {
    setCurrentCity: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCurrentCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;

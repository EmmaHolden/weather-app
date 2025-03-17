import { createSlice } from "@reduxjs/toolkit";

export const currentCitySlice = createSlice({
  name: "currentCity",
  initialState: { city: "London" },
  reducers: {
    setCurrentCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setCurrentCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;

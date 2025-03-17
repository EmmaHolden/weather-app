import { configureStore } from "@reduxjs/toolkit";
import currentCityReducer from "./currentCity";

export const store = configureStore({
  reducer: {
    currentCity: currentCityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

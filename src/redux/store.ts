import { configureStore } from "@reduxjs/toolkit";
import currentCityReducer from "./currentCity";
import themeReducer from "./theme";

export const store = configureStore({
  reducer: {
    currentCity: currentCityReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

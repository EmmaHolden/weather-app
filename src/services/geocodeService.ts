import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;
const GEOCODE_URL = "https://api.openweathermap.org/geo/1.0/direct";

export const getCitySuggestions = async (city: string) => {
  const response = await axios.get(GEOCODE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      lang: "en",
      limit: 5,
    },
  });
  return response.data;
};

import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { getTodayLongDate } from "../../utils/dateUtils";
import WeatherTempWindow from "../WeatherTempWindow/WeatherTempWindow";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  const currentDate = getTodayLongDate();
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: currentWeather, isPending: isWeatherPending } =
    useGetCurrentWeather(currentCity.city);

  if (isWeatherPending || !currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current-weather-container main-container">
      <h2 className="no-margin">{currentWeather.cityName}</h2>
      <p>{currentDate}</p>
      <WeatherTempWindow
        weatherCategory={currentWeather.main}
        weatherDescription={currentWeather.description}
        weatherIcon={currentWeather.icon}
        weatherTemp={currentWeather.temperature}
      />
    </div>
  );
};

export default CurrentWeather;

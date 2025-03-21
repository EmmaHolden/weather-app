import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { getTodayLongDate } from "../../utils/dateUtils";
import WeatherTempWindow from "../WeatherTempWindow/WeatherTempWindow";
import "./CurrentWeather.css";
import classNames from "classnames";

const CurrentWeather = () => {
  const currentDate = getTodayLongDate();
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: currentWeather, isPending: isWeatherPending } =
    useGetCurrentWeather(currentCity.city);

  if (isWeatherPending || !currentWeather) {
    return <div>Loading...</div>;
  }

  const classes = classNames("current-weather-window", {
    thunderstorm: currentWeather.main === "Thunderstorm",
    rain: ["Rain", "Drizzle"].includes(currentWeather.main),
    clear: currentWeather.main === "Clear",
    snow: currentWeather.main === "Snow",
    clouds: currentWeather.main === "Clouds",
    atmosphere: currentWeather.main === "Atmosphere",
  });

  return (
    <div className="current-weather-container main-container">
      <h2 className="no-margin">{currentWeather.cityName}</h2>
      <p>{currentDate}</p>
      <div className={classes}>
        <WeatherTempWindow
          weatherDescription={currentWeather.description}
          weatherIcon={currentWeather.icon}
          weatherTemp={currentWeather.temperature}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;

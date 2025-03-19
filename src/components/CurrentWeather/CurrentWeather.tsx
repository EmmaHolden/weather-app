import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./CurrentWeather.css";
import classNames from "classnames";

const CurrentWeather = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const {
    data: currentWeather,
    error,
    isPending: isWeatherPending,
  } = useGetCurrentWeather(currentCity.city);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isWeatherPending) {
    return <div>Loading...</div>;
  }

  const classes = classNames("current-weather-container", "main-container", {
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
      <div className="current-weather-window">
        <p>{currentWeather.description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
        />

        <p className="current-temperature">{currentWeather.temperature}°C</p>
      </div>
    </div>
  );
};

export default CurrentWeather;

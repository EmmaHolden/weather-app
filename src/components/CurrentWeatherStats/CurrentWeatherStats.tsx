import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./CurrentWeatherStats.css";

const CurrentWeatherStats = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const {
    data: currentWeather,
    error,
    isPending: isWeatherPending,
  } = useGetCurrentWeather(currentCity.city);

  const timezoneOffset = currentWeather?.timezone;

  const sunriseTime = new Date(
    (currentWeather?.sunrise + timezoneOffset) * 1000
  ).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const sunsetTime = new Date(
    (currentWeather?.sunset + timezoneOffset) * 1000
  ).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isWeatherPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current-weather-stats-container main-container">
      <h2 className="no-margin">Current Conditions</h2>
      <div className="current-weather-items-container">
        <div className="current-weather-item frosted-item">
          <img className="weather-icon" src="../images/thermometer.png" />
          <p>{currentWeather.feelsLike}°C</p>
          <p>Feels like</p>
        </div>
        <div className="current-weather-item frosted-item">
          <img className="weather-icon" src="../images/humidity.png" />
          <p>{currentWeather.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="current-weather-item frosted-item">
          <img className="weather-icon" src="../images/windSpeed.png" />
          <p>{currentWeather.windSpeed}m/s</p>
          <p>Wind Speed</p>
        </div>
      </div>
      <div className="current-weather-items-container">
        <div className="current-weather-item frosted-item">
          <img className="weather-icon" src="../images/gauge.png" />
          <p>{currentWeather.pressure} hPa</p>
          <p>Pressure</p>
        </div>
        <div className="current-weather-item frosted-item">
          <img className="weather-icon" src="../images/windSpeed.png" />
          <p>{sunriseTime}</p>
          <p>Sunrise</p>
        </div>
        <div className="current-weather-item frosted-item">
          <img className="weather-icon" src="../images/thermometer.png" />
          <p>{sunsetTime}</p>
          <p>Sunset</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherStats;

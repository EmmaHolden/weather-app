import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./CurrentWeather.css";
import classNames from "classnames";

const CurrentWeather = () => {
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

  const classes = classNames("current-weather-container", {
    thunderstorm: currentWeather.main === "Thunderstorm",
    rain: ["Rain", "Drizzle"].includes(currentWeather.main),
    clear: currentWeather.main === "Clear",
    snow: currentWeather.main === "Snow",
    clouds: currentWeather.main === "Clouds",
    atmosphere: currentWeather.main === "Atmosphere",
  });

  return (
    <div className={classes}>
      <h2 className="no-margin">{currentWeather.cityName}</h2>
      <p>Monday 10th March 2025</p>
      <div className="current-weather-window">
        <p>{currentWeather.description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
        />

        <p className="current-temperature">{currentWeather.temperature}°C</p>
      </div>
      <div className="widgets-container">
        <div className="widget">
          <img className="weather-icon" src="../images/max.png" />
          <p>{currentWeather.tempMax}°C</p>
          <p>High</p>
        </div>
        <div className="widget">
          <img className="weather-icon" src="../images/min.png" />
          <p>{currentWeather.tempMin}°C</p>
          <p>Low</p>
        </div>
        <div className="widget">
          <img className="weather-icon" src="../images/thermometer.png" />
          <p>{currentWeather.feelsLike}°C</p>
          <p>Feels</p>
        </div>
      </div>
      <div className="widgets-container">
        <div className="widget">
          <img className="weather-icon" src="../images/humidity.png" />
          <p>{currentWeather.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="widget">
          <img className="weather-icon" src="../images/windSpeed.png" />
          <p>{currentWeather.windSpeed}m/s</p>
          <p>Wind</p>
        </div>
        <div className="widget">
          <img className="weather-icon" src="../images/gauge.png" />
          <p>{currentWeather.pressure}hPa</p>
          <p>Pressure</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

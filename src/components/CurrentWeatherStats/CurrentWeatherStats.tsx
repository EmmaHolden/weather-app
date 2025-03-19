import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./CurrentWeatherStats.css";
import Widget from "../Widget/Widget";
import WeatherDate from "../WeatherDate/WeatherDate";

const CurrentWeatherStats = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const {
    data: currentWeather,
    error,
    isPending: isWeatherPending,
  } = useGetCurrentWeather(currentCity.city);

  const timezoneOffset = currentWeather?.timezone;

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isWeatherPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current-conditions-container main-container">
      <h2 className="no-margin">Current Conditions</h2>
      <div className="current-conditions-items-container">
        <Widget>
          <img src="../images/condition-icons/thermometer.png" />
          <p>{currentWeather.feelsLike}°C</p>
          <p>Feels like</p>
        </Widget>
        <Widget>
          <img src="../images/condition-icons/humidity.png" />
          <p>{currentWeather.humidity}%</p>
          <p>Humidity</p>
        </Widget>
        <Widget>
          <img src="../images/condition-icons/windSpeed.png" />
          <p>{currentWeather.windSpeed}m/s</p>
          <p>Wind Speed</p>
        </Widget>
      </div>
      <div className="current-conditions-items-container">
        <Widget>
          <img src="../images/condition-icons/pressure.png" />
          <p>{currentWeather.pressure} hPa</p>
          <p>Pressure</p>
        </Widget>
        <Widget>
          <img src="../images/condition-icons/sunrise.png" />
          <WeatherDate
            variant="hour-minute"
            rawDate={(currentWeather?.sunrise + timezoneOffset) * 1000}
          />
          <p>Sunrise</p>
        </Widget>
        <Widget>
          <img src="../images/condition-icons/sunset.png" />
          <WeatherDate
            variant="hour-minute"
            rawDate={(currentWeather?.sunset + timezoneOffset) * 1000}
          />
          <p>Sunset</p>
        </Widget>
      </div>
    </div>
  );
};

export default CurrentWeatherStats;

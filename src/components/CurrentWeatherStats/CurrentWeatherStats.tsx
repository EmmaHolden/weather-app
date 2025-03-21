import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./CurrentWeatherStats.css";
import Widget from "../Widget/Widget";
import WeatherDate from "../WeatherDate/WeatherDate";
import WeatherCondition from "../WeatherConditions/WeatherCondition";

const CurrentWeatherStats = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: currentWeather, isPending: isWeatherPending } =
    useGetCurrentWeather(currentCity.city);

  const timezoneOffset = currentWeather?.timezone;

  if (isWeatherPending || !currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current-conditions-container main-container">
      <h2 className="no-margin">Current Conditions</h2>
      <div className="current-conditions-items-container">
        <Widget>
          <WeatherCondition
            variant="feelsLike"
            showDescription
            value={currentWeather.feelsLike}
          />
        </Widget>
        <Widget>
          <WeatherCondition
            variant="humidity"
            showDescription
            value={currentWeather.humidity}
          />
        </Widget>
        <Widget>
          <WeatherCondition
            variant="windSpeed"
            showDescription
            value={currentWeather.windSpeed}
          />
        </Widget>
      </div>
      <div className="current-conditions-items-container">
        <Widget>
          <WeatherCondition
            variant="windSpeed"
            showDescription
            value={currentWeather.pressure}
          />
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

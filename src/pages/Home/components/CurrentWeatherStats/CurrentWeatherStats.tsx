import { useGetCurrentWeather } from "../../../../hooks/useGetCurrentWeather";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import Widget from "../../../../components/Widget/Widget";
import { getHourMinute } from "../../../../utils/dateUtils";
import WeatherStat from "../../../../components/WeatherStat/WeatherStat";
import "./CurrentWeatherStats.css";

const CurrentWeatherStats = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: currentWeather } = useGetCurrentWeather(currentCity.city);

  const timezoneOffset = currentWeather?.timezone;

  return (
    <div className="current-stats-container main-container">
      <h2 className="no-margin">Current Conditions</h2>
      <div className="current-stats-items-container">
        <Widget>
          <WeatherStat
            variant="feelsLike"
            showDescription
            value={currentWeather?.feelsLike}
          />
        </Widget>
        <Widget>
          <WeatherStat
            variant="humidity"
            showDescription
            value={currentWeather?.humidity}
          />
        </Widget>
        <Widget>
          <WeatherStat
            variant="windSpeed"
            showDescription
            value={currentWeather?.windSpeed}
          />
        </Widget>
      </div>
      <div className="current-stats-items-container">
        <Widget>
          <WeatherStat
            variant="pressure"
            showDescription
            value={currentWeather?.pressure}
          />
        </Widget>
        <Widget>
          <WeatherStat
            variant="sunrise"
            showDescription
            value={getHourMinute(
              (currentWeather?.sunrise + timezoneOffset) * 1000
            )}
          />
        </Widget>
        <Widget>
          <WeatherStat
            variant="sunset"
            showDescription
            value={getHourMinute(
              (currentWeather?.sunset + timezoneOffset) * 1000
            )}
          />
        </Widget>
      </div>
    </div>
  );
};

export default CurrentWeatherStats;

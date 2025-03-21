import WeatherStat from "../../../components/WeatherStat/WeatherStat";
import WeatherTempWindow from "../../../components/WeatherTempWindow/WeatherTempWindow";
import Widget from "../../../components/Widget/Widget";
import { getHourMinute } from "../../../utils/dateUtils";
import "./ForecastItem.css";

interface ForecastItemProps {
  date: string;
  data: any[];
  timezoneOffset: number;
}
const ForecastItem = ({ date, data, timezoneOffset }: ForecastItemProps) => {
  return (
    <div className="main-container">
      <h2>{date}</h2>
      <div className="daily-forecast-container">
        {data.map((timestamp) => (
          <Widget key={timestamp.dt_txt}>
            <p>{getHourMinute(timestamp.dt, timezoneOffset)}</p>
            <WeatherTempWindow
              weatherDescription={timestamp.weather[0].description}
              weatherIcon={timestamp.weather[0].icon}
              weatherTemp={Math.round(timestamp.main.temp)}
            />
            <div className="forecast-stat-container">
              <WeatherStat variant="pressure" value={timestamp.main.pressure} />
            </div>
            <div className="forecast-stat-container">
              <WeatherStat
                variant="windSpeed"
                value={Math.round(timestamp.wind.speed)}
              />
            </div>
            <div className="forecast-stat-container">
              <WeatherStat variant="humidity" value={timestamp.main.humidity} />
            </div>
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default ForecastItem;

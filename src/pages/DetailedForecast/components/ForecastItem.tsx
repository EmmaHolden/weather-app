import WeatherStat from "../../../components/WeatherStat/WeatherStat";
import Widget from "../../../components/Widget/Widget";
import { getHourMinute } from "../../../utils/dateUtils";
import "./ForecastItem.css";

interface ForecastItemProps {
  date: string;
  data: any[];
}
const ForecastItem = ({ date, data }: ForecastItemProps) => {
  return (
    <div className="main-container">
      <h2>{date}</h2>
      <div className="daily-forecast-container">
        {data.map((timestamp) => (
          <Widget key={timestamp.dt_txt}>
            <p>{getHourMinute(timestamp.dt_txt)}</p>
            <img src={`../images/${timestamp.weather[0].icon}.png`} />
            <p>{timestamp.weather[0].description}</p>
            <p>{Math.round(timestamp.main.temp)}°C</p>
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

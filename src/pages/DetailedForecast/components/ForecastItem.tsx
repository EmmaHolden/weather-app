import WeatherCondition from "../../../components/WeatherConditions/WeatherCondition";
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
      <div className="twenty-four-hour-forecast-container">
        {data.map((timestamp) => (
          <Widget key={timestamp.dt_txt}>
            <p>{getHourMinute(timestamp.dt_txt)}</p>
            <img src={`../images/${timestamp.weather[0].icon}.png`} />
            <p>{timestamp.weather[0].description}</p>
            <p>{Math.round(timestamp.main.temp)}°C</p>
            <div className="forecast-condition-container">
              <WeatherCondition
                variant="pressure"
                value={timestamp.main.pressure}
              />
            </div>
            <div className="forecast-condition-container">
              <WeatherCondition
                variant="windSpeed"
                value={timestamp.wind.speed}
              />
            </div>
            <div className="forecast-condition-container">
              <WeatherCondition
                variant="humidity"
                value={timestamp.main.humidity}
              />
            </div>
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default ForecastItem;

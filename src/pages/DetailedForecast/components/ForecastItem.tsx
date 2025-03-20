import WeatherDate from "../../../components/WeatherDate/WeatherDate";
import Widget from "../../../components/Widget/Widget";
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
            <WeatherDate variant="hour-minute" rawDate={timestamp.dt_txt} />
            <img src={`../images/${timestamp.weather[0].icon}.png`} />
            <p>{timestamp.weather[0].description}</p>
            <p>{Math.round(timestamp.main.temp)}°C</p>
            <div className="forecast-condition-container">
              <img
                style={{ width: 30 }}
                src="../images/condition-icons/pressure.png"
              />
              <p>{timestamp.main.pressure} hPa</p>
            </div>
            <div className="forecast-condition-container">
              <img
                style={{ width: 30 }}
                src="../images/condition-icons/windSpeed.png"
              />
              <p>{timestamp.wind.speed}m/s</p>
            </div>
            <div className="forecast-condition-container">
              <img
                style={{ width: 30 }}
                src="../images/condition-icons/humidity.png"
              />
              <p>{timestamp.main.humidity}%</p>
            </div>
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default ForecastItem;

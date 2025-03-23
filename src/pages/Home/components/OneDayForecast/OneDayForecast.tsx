import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useGetForecast } from "../../../../hooks/useGetForecast";
import "./OneDayForecast.css";
import Widget from "../../../../components/Widget/Widget";
import { getDayTime } from "../../../../utils/dateUtils";

const OneDayForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: forecastData } = useGetForecast(
    currentCity.lat,
    currentCity.lon
  );

  const timezoneOffset = forecastData.city.timezone;
  const nextTwentyFourHours = forecastData.list.slice(0, 8);

  return (
    <div className="main-container">
      <h2 className="no-margin">24h Forecast</h2>
      <div className="twenty-four-hour-forecast-container">
        {nextTwentyFourHours.map((item: any, index: number) => (
          <Widget key={index}>
            <p>{getDayTime(item.dt, timezoneOffset)}</p>
            <img
              src={`../images/weather-icons/${item.weather[0].icon}.png`}
              alt={`${item.weather[0].description} icon`}
            />
            <p>{Math.round(item.main.temp)}°C</p>
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default OneDayForecast;

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetForecast } from "../../hooks/useGetForecast";
import "./OneDayForecast.css";
import Widget from "../Widget/Widget";
import WeatherDate from "../WeatherDate/WeatherDate";

const OneDayForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const {
    data: forecastData,
    error,
    isPending: isForecastPending,
  } = useGetForecast(currentCity.city);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isForecastPending) {
    return <div>Loading...</div>;
  }

  const nextTwentyFourHours = forecastData.list.slice(0, 8);

  return (
    <div className="main-container">
      <h2 className="no-margin">24h Forecast</h2>
      <div className="twenty-four-hour-forecast-container">
        {nextTwentyFourHours.map((item: any, index: number) => (
          <Widget key={index}>
            <WeatherDate variant="day-time" rawDate={item.dt_txt} />
            <img src={`../images/${item.weather[0].icon}.png`} />
            <p>{Math.round(item.main.temp)}°C</p>
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default OneDayForecast;

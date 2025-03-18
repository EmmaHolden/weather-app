import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./DailyForecast.css";
import { useGetDailyForecast } from "../../hooks/useGetDailyForecast";

const DailyForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);

  const {
    dailyForecast,
    error,
    isPending: isForecastPending,
  } = useGetDailyForecast(currentCity.city);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isForecastPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="title-day-widgets-container">
      <h2 className="no-margin">{currentCity.city}: Forecast by Day</h2>
      <div className="day-widgets-container">
        {dailyForecast.map((day) => {
          return (
            <div className="day-widget">
              <p>{day.date}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              />
              <p>H:{day.high}°C</p>
              <p>L:{day.low}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;

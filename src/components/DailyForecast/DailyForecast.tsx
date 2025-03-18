import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetDailyForecast } from "../../hooks/useGetDailyForecast";
import "./DailyForecast.css";

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
    <div className="five-day-forecast-container main-container">
      <h3 className="no-margin">5 day forecast</h3>
      <div className="five-day-forecast-items-container">
        {dailyForecast.map((day, index) => {
          return (
            <div key={index} className="five-day-forecast-item frosted-item">
              <p>{day.date}</p>
              <div className="five-day-forecast-image-container">
                <img
                  src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                />
              </div>
              <div className="high-low-container">
                <p>H:{day.high}°C</p>
                <p>L:{day.low}°C</p>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default DailyForecast;

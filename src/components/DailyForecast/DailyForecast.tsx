import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetDailyForecast } from "../../hooks/useGetDailyForecast";
import "./DailyForecast.css";

const DailyForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);

  const { dailyForecast, isPending: isForecastPending } = useGetDailyForecast(
    currentCity.city
  );

  if (isForecastPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="five-day-forecast-container main-container">
      <h2 className="no-margin">5 day forecast</h2>
      <div className="five-day-forecast-items-container">
        {dailyForecast.map((day, index) => {
          return (
            <div key={index} className="five-day-forecast-item frosted-item">
              <p>{day.date}</p>
              <div className="five-day-forecast-image-container">
                <img src={`../images/${day.icon}.png`} />
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

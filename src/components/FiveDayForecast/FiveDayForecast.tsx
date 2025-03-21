import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetFiveDayForecast } from "../../hooks/useGetFiveDayForecast";
import "./FiveDayForecast.css";

const FiveDayForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);

  const { fiveDayForecast } = useGetFiveDayForecast(currentCity.city);

  return (
    <div className="five-day-forecast-container main-container">
      <h2 className="no-margin">5 day forecast</h2>
      <div className="five-day-forecast-items-container">
        {fiveDayForecast.map((day, index) => {
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

export default FiveDayForecast;

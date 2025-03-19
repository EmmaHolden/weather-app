import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetForecast } from "../../hooks/useGetForecast";
import "./OneDayForecast.css";

const OneDayForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const {
    data: forecastData,
    error,
    isPending: isForecastPending,
  } = useGetForecast(currentCity.city);

  console.log(forecastData);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (isForecastPending) {
    return <div>Loading...</div>;
  }

  const nextTwentyFourHours = forecastData.list.slice(0, 8);
  console.log(nextTwentyFourHours);

  return (
    <div className="main-container">
      <h2 className="no-margin">24h Forecast</h2>
      <div className="twenty-four-hour-forecast-container">
        {nextTwentyFourHours.map((item: any, index: any) => (
          <div
            className="twenty-four-hour-forecast-item frosted-item"
            key={index}
          >
            <div>
              <p>
                {new Date(item.dt_txt).toLocaleDateString("en-GB", {
                  weekday: "short",
                })}{" "}
                {new Date(item.dt_txt)
                  .toLocaleTimeString("en-GB", {
                    hour: "numeric",
                    hour12: true,
                  })
                  .replace(" ", "")}
              </p>
            </div>
            <div>
              <p>{item.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
            </div>
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneDayForecast;

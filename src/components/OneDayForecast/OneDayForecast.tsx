import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetForecast } from "../../hooks/useGetForecast";
import "./OneDayForecast.css";
import Widget from "../Widget/Widget";

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
        {nextTwentyFourHours.map((item: any, index: any) => (
          <Widget key={index}>
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
              <img src={`../images/${item.weather[0].icon}.png`} />
            </div>
            <p>{Math.round(item.main.temp)}°C</p>
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default OneDayForecast;

import { useGetCurrentWeather } from "../../../../hooks/useGetCurrentWeather";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { formatLocalTime, getLongDate } from "../../../../utils/dateUtils";
import WeatherTempWindow from "../../../../components/WeatherTempWindow/WeatherTempWindow";
import "./CurrentWeather.css";
import classNames from "classnames";

const CurrentWeather = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: currentWeather } = useGetCurrentWeather(currentCity.city);

  const timezoneOffset: number = currentWeather?.timezone;

  const currentDate: string = getLongDate(
    (currentWeather?.date + timezoneOffset) * 1000
  );

  const currentTime: string = formatLocalTime(
    new Date(Date.now() + timezoneOffset * 1000)
  );

  const classes = classNames(
    "current-weather-window",
    currentWeather?.main.toLowerCase() || ""
  );

  return (
    <div className="current-weather-container main-container">
      <h2 className="no-margin">{currentWeather?.cityName}</h2>
      <p>{currentDate}</p>
      <p>{currentTime}</p>
      <div className={classes}>
        <WeatherTempWindow
          weatherDescription={currentWeather?.description}
          weatherIcon={currentWeather?.icon}
          weatherTemp={currentWeather?.temperature || 0}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;

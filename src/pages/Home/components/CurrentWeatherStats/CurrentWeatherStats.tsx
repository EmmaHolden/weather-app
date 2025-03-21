import { useGetCurrentWeather } from "../../../../hooks/useGetCurrentWeather";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import Widget from "../../../../components/Widget/Widget";
import { getHourMinute } from "../../../../utils/dateUtils";
import WeatherStat from "../../../../components/WeatherStat/WeatherStat";
import "./CurrentWeatherStats.css";
import { WeatherStatName } from "../../../../types/global";
import { ReactNode } from "react";

const CurrentWeatherStats = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { data: currentWeather } = useGetCurrentWeather(currentCity.city);

  const timezoneOffset = currentWeather?.timezone;

  const weatherStatsArray: { variant: WeatherStatName; value: ReactNode }[] = [
    { variant: "feelsLike", value: currentWeather?.feelsLike },
    { variant: "humidity", value: currentWeather?.humidity },
    { variant: "windSpeed", value: currentWeather?.windSpeed },
    { variant: "pressure", value: currentWeather?.pressure },
    {
      variant: "sunrise",
      value: getHourMinute(currentWeather?.sunrise, timezoneOffset),
    },
    {
      variant: "sunset",
      value: getHourMinute(currentWeather?.sunset, timezoneOffset),
    },
  ];

  return (
    <div className="current-stats-container main-container">
      <h2 className="no-margin">Current Conditions</h2>
      <div className="current-stats-items-container">
        {weatherStatsArray.map((stat) => (
          <Widget key={stat.variant}>
            <WeatherStat
              variant={stat.variant}
              value={stat.value}
              showDescription
            />
          </Widget>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeatherStats;

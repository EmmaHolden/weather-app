import classNames from "classnames";
import { WeatherCategory } from "../../types/global";
import "./WeatherTempWindow.css";

interface WeatherTempWindowProps {
  weatherCategory: WeatherCategory;
  weatherDescription: string;
  weatherIcon: string;
  weatherTemp: number;
}
const WeatherTempWindow = ({
  weatherCategory,
  weatherDescription,
  weatherIcon,
  weatherTemp,
}: WeatherTempWindowProps) => {
  const classes = classNames("current-weather-window", {
    thunderstorm: weatherCategory === "Thunderstorm",
    rain: ["Rain", "Drizzle"].includes(weatherCategory),
    clear: weatherCategory === "Clear",
    snow: weatherCategory === "Snow",
    clouds: weatherCategory === "Clouds",
    atmosphere: weatherCategory === "Atmosphere",
  });

  return (
    <div className={classes}>
      <p>{weatherDescription}</p>
      <img src={`../images/${weatherIcon}.png`} />
      <p className="current-temperature">{weatherTemp}°C</p>
    </div>
  );
};

export default WeatherTempWindow;

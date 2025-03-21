import "./WeatherTempWindow.css";

interface WeatherTempWindowProps {
  weatherDescription: string;
  weatherIcon: string;
  weatherTemp: number;
}
const WeatherTempWindow = ({
  weatherDescription,
  weatherIcon,
  weatherTemp,
}: WeatherTempWindowProps) => {
  return (
    <>
      <p>{weatherDescription}</p>
      <img src={`../images/${weatherIcon}.png`} />
      <p className="current-temperature">{weatherTemp}°C</p>
    </>
  );
};

export default WeatherTempWindow;

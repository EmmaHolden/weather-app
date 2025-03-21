import { WeatherStatName, WeatherStatInfo } from "../../types/global";

interface WeatherStatProps {
  variant: WeatherStatName;
  showDescription?: boolean;
  value: number | string;
}
const WeatherStat = ({ variant, showDescription, value }: WeatherStatProps) => {
  return (
    <>
      <img src={WeatherStatInfo[variant].imagePath} />
      <p>
        {value}
        {WeatherStatInfo[variant].unit}
      </p>
      {showDescription ? <p>{WeatherStatInfo[variant].description}</p> : null}
    </>
  );
};

export default WeatherStat;

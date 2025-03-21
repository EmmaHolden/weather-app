import { ReactNode } from "react";
import { WeatherStat, WeatherStatInfo } from "../../types/global";

interface WeatherConditionProps {
  variant: WeatherStat;
  showDescription?: boolean;
  value: number | string | ReactNode;
}
const WeatherCondition = ({
  variant,
  showDescription,
  value,
}: WeatherConditionProps) => {
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

export default WeatherCondition;

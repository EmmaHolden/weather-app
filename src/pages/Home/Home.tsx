import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyForecast from "./components/FiveDayForecast/FiveDayForecast";
import OneDayForecast from "./components/OneDayForecast/OneDayForecast";
import CurrentWeatherStats from "./components/CurrentWeatherStats/CurrentWeatherStats";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { useGetCurrentWeather } from "../../hooks/useGetCurrentWeather";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetFiveDayForecast } from "../../hooks/useGetFiveDayForecast";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { isPending: isCurrentWeatherPending } = useGetCurrentWeather(
    currentCity.lat,
    currentCity.lon
  );
  const { isPending: isFiveDayForecastPending } = useGetFiveDayForecast(
    currentCity.lat,
    currentCity.lon
  );

  if (isCurrentWeatherPending || isFiveDayForecastPending) {
    return <Loading />;
  }

  return (
    <div className="page-container" role="main">
      <Navbar />
      <div className="horizontal-home-container">
        <div className="current-weather-home-container">
          <CurrentWeather />
          <CurrentWeatherStats />
        </div>
        <DailyForecast />
      </div>
      <OneDayForecast />
    </div>
  );
};

export default Home;

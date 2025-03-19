import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import OneDayForecast from "../components/OneDayForecast/OneDayForecast";
import CurrentWeatherStats from "../components/CurrentWeatherStats/CurrentWeatherStats";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
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

import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import OneDayForecast from "../components/OneDayForecast/OneDayForecast";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <div className="horizontal-home-container">
        <CurrentWeather />
        <DailyForecast />
      </div>
      <OneDayForecast />
    </div>
  );
};

export default Home;

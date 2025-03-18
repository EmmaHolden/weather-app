import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <CurrentWeather />
      <DailyForecast />
    </div>
  );
};

export default Home;

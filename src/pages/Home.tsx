import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <CurrentWeather />
    </div>
  );
};

export default Home;

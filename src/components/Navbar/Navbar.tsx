import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-button-group">
        <button className="nav-button">Current Weather</button>
        <button className="nav-button">Detailed Forecast</button>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { RoutePath } from "../../types/global";
import LightDarkModeToggle from "../LightDarkModeToggle/LightDarkModeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-button-group">
        <NavLink
          to={RoutePath.Home}
          className={({ isActive }) => (isActive ? "nav-active" : "nav-button")}
        >
          Current Weather
        </NavLink>
        <NavLink
          to={RoutePath.DetailedForecast}
          className={({ isActive }) => (isActive ? "nav-active" : "nav-button")}
        >
          Detailed Forecast
        </NavLink>
      </div>
      <LightDarkModeToggle />

      <SearchBar />
    </nav>
  );
};

export default Navbar;

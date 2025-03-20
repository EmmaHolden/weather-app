import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { RoutePath } from "../../types/global";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-button-group">
        <NavLink
          to={RoutePath.Home}
          className={({ isActive }) => (isActive ? "nav-active" : "nav-button")}
        >
          Current Weather
        </NavLink>
        <NavLink
          to={RoutePath.ServerError}
          className={({ isActive }) => (isActive ? "nav-active" : "nav-button")}
        >
          Detailed Forecast
        </NavLink>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;

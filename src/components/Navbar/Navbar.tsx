import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { RoutePath } from "../../types/global";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme";
import { RootState } from "../../redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  const handleSwitch = () => {
    dispatch(
      setTheme(theme.theme === "light-mode" ? "dark-mode" : "light-mode")
    );
  };

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
      <button onClick={handleSwitch}>Toggle Dark Light</button>
      <SearchBar />
    </div>
  );
};

export default Navbar;

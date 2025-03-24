import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTheme } from "../../redux/theme";
import "./LightDarkModeToggle.css";
import classNames from "classnames";

const LightDarkModeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  const handleSwitch = () => {
    dispatch(
      setTheme(theme.theme === "light-mode" ? "dark-mode" : "light-mode")
    );
  };

  return (
    <div className="light-dark-button-container">
      <button
        data-testid="light-dark"
        className="light-dark-toggle-button"
        onClick={handleSwitch}
      >
        <img
          className={classNames("light-dark-toggle-image", {
            hidden: theme.theme === "light-mode",
          })}
          src={`../images/light-mode.png`}
          alt="light mode icon"
        />
        <img
          className={classNames("light-dark-toggle-image", {
            hidden: theme.theme === "dark-mode",
          })}
          src={`../images/dark-mode.png`}
          alt="dark mode icon"
        />
      </button>
    </div>
  );
};

export default LightDarkModeToggle;

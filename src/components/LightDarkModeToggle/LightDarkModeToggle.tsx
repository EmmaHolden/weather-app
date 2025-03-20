import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTheme } from "../../redux/theme";
import "./LightDarkModeToggle.css";

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
      <button className="light-dark-toggle-button" onClick={handleSwitch}>
        <img
          className={
            theme.theme === "light-mode"
              ? "light-dark-toggle-image hidden"
              : "light-dark-toggle-image"
          }
          src={`../images/light-mode.png`}
        />
        <img
          className={
            theme.theme === "dark-mode"
              ? "light-dark-toggle-image hidden"
              : "light-dark-toggle-image"
          }
          src={`../images/dark-mode.png`}
        />
      </button>
    </div>
  );
};

export default LightDarkModeToggle;

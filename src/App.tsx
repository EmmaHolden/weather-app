import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutePath } from "./types/global";
import Home from "./pages/Home/Home";
import ServerError from "./pages/ServerError/ServerError";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import DetailedForecast from "./pages/DetailedForecast/DetailedForecast";

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <div className={theme.theme}>
      <Routes>
        <Route path={RoutePath.Home} element={<Home />} />
        <Route
          path={RoutePath.DetailedForecast}
          element={<DetailedForecast />}
        />
        <Route path={RoutePath.ServerError} element={<ServerError />} />
        <Route
          path="*"
          element={<Navigate to={RoutePath.ServerError} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;

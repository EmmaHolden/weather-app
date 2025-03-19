import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutePath } from "./types/global";
import Home from "./pages/Home/Home";
import ServerError from "./pages/ServerError/ServerError";

function App() {
  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home} element={<Home />} />
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

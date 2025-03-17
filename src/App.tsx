import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { RoutePath } from "./types/global";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home} element={<Home />} />
        <Route path="*" element={<Navigate to={RoutePath.Home} replace />} />
      </Routes>
    </div>
  );
}

export default App;

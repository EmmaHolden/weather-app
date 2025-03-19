import { RoutePath } from "../../types/global";
import "./ServerError.css";

const ServerError = () => {
  return (
    <div className="error-container">
      <h1 className="no-margin">Something went wrong</h1>
      <a href={RoutePath.Home}>
        <img className="error-image" src="../images/error.png" />
      </a>
      <h2>Click the sad cloud to try to return home</h2>
    </div>
  );
};

export default ServerError;

import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { useGetDetailedForecast } from "../../hooks/useGetDetailedForecast";
import { RootState } from "../../redux/store";
import ForecastItem from "./components/ForecastItem";
import Loading from "../../components/Loading/Loading";

const DetailedForecast = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const { cityName, timezoneOffset, detailedForecast, isPending } =
    useGetDetailedForecast(currentCity.city);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="page-container">
      <Navbar />
      <h1>Detailed Forecast for {cityName}</h1>
      {detailedForecast.map((day, index) => (
        <div key={index}>
          <ForecastItem
            date={day.date}
            data={day.data}
            timezoneOffset={timezoneOffset || 0}
          />
        </div>
      ))}
    </div>
  );
};

export default DetailedForecast;

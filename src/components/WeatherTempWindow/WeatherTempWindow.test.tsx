import { render, screen } from "@testing-library/react";
import WeatherTempWindow from "./WeatherTempWindow";

describe("WeatherStat Component", () => {
  it("should render correctly when props passed in", () => {
    render(
      <WeatherTempWindow
        weatherDescription="light rain"
        weatherIcon="01d"
        weatherTemp={18}
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "../images/weather-icons/01d.png");
    expect(screen.getByText("light rain")).toBeInTheDocument();
    expect(screen.getByText("18°C")).toBeInTheDocument();
  });
});

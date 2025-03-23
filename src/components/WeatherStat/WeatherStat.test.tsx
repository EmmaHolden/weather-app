import { render, screen } from "@testing-library/react";
import WeatherStat from "./WeatherStat";

describe("WeatherStat Component", () => {
  it("should render correctly when props passed in", () => {
    render(<WeatherStat variant="humidity" value={78} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "../images/condition-icons/humidity.png"
    );
    expect(screen.getByText("78%")).toBeInTheDocument();
  });

  it("should render description is showDescription set to true", () => {
    render(
      <WeatherStat variant="pressure" value={1023} showDescription={true} />
    );
    expect(screen.getByText("Pressure")).toBeInTheDocument();
  });

  it("should not render description is showDescription set to true", () => {
    render(<WeatherStat variant="pressure" value={1023} />);
    expect(screen.queryByText("Pressure")).not.toBeInTheDocument();
  });
});

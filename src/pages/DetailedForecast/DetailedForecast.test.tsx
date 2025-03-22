import "@testing-library/jest-dom";
import { vi } from "vitest";
import { screen } from "@testing-library/react";
import {
  renderComponentWithProviders,
  setUpMocks,
} from "../../utils/testUtils";
import { detailedForecastMock } from "../../mocks/detailedForecast";
import DetailedForecast from "./DetailedForecast";

setUpMocks();

vi.mock("../../hooks/useGetDetailedForecast", () => ({
  useGetDetailedForecast: () => detailedForecastMock,
}));

describe("DetailedForecast", () => {
  it("should render page with mocked store", () => {
    renderComponentWithProviders(<DetailedForecast />);
    expect(screen.getByText("Detailed Forecast for Doha")).toBeInTheDocument();
  });

  it("should display 5 days of forecast", () => {
    renderComponentWithProviders(<DetailedForecast />);
    expect(screen.getAllByText(/2025/)).toHaveLength(5);
  });
});
//   it("should render exactly 6 stats", () => {
//     renderComponentWithProviders(<CurrentWeatherStats />);
//     const stats = screen.getAllByRole("img");
//     expect(stats).toHaveLength(6);
//   });

//   it("should render the values of the six stats with the correct units", () => {
//     renderComponentWithProviders(<CurrentWeatherStats />);
//     expect(screen.getByText("19°C")).toBeInTheDocument();
//     expect(screen.getByText("80%")).toBeInTheDocument();
//     expect(screen.getByText("5m/s")).toBeInTheDocument();
//     expect(screen.getByText("1018hPa")).toBeInTheDocument();
//     expect(screen.getByText("6:39 am")).toBeInTheDocument();
//     expect(screen.getByText("9:31 pm")).toBeInTheDocument();
//   });

//   it("should show descriptions of stats", () => {
//     renderComponentWithProviders(<CurrentWeatherStats />);
//     expect(screen.getByText("Feels Like")).toBeInTheDocument();
//     expect(screen.getByText("Sunrise")).toBeInTheDocument();
//   });
// });

// describe("FiveDayForecast", () => {
//   it("should render five days of forecast", () => {
//     renderComponentWithProviders(<FiveDayForecast />);
//     expect(screen.getAllByText(/^H:.*/)).toHaveLength(5);
//     expect(screen.getAllByText(/^L:.*/)).toHaveLength(5);
//     expect(screen.getAllByRole("img")).toHaveLength(5);
//   });

//   it("should format the dates correctly", () => {
//     renderComponentWithProviders(<FiveDayForecast />);
//     expect(screen.getByText("Mon")).toBeInTheDocument();
//     expect(screen.getByText("Wed")).toBeInTheDocument();
//   });
// });

// describe("OneDayForecast", () => {
//   it("should render 8 data points of forecast", () => {
//     renderComponentWithProviders(<OneDayForecast />);
//     expect(screen.getAllByText(/°C$/)).toHaveLength(8);
//   });

//   it("should format the dates correctly", () => {
//     renderComponentWithProviders(<OneDayForecast />);
//     expect(screen.getByText("Sun 12am")).toBeInTheDocument();
//     expect(screen.getByText("Sun 9pm")).toBeInTheDocument();
//   });
// });

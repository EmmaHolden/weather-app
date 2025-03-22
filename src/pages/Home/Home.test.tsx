import "@testing-library/jest-dom";
import { vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderComponentWithProviders,
  setUpMocks,
} from "../../utils/testUtils";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrentWeatherStats from "./components/CurrentWeatherStats/CurrentWeatherStats";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";
import OneDayForecast from "./components/OneDayForecast/OneDayForecast";
import Navbar from "../../components/Navbar/Navbar";
import { currentWeatherMock } from "../../mocks/currentWeather";
import { fiveDayMock } from "../../mocks/fiveDayForecast";
import { forecastMock } from "../../mocks/forecast";
import { useDispatch } from "react-redux";

setUpMocks();

vi.mock("../../hooks/useGetCurrentWeather", () => ({
  useGetCurrentWeather: () => currentWeatherMock,
}));

vi.mock("../../hooks/useGetFiveDayForecast", () => ({
  useGetFiveDayForecast: () => fiveDayMock,
}));

vi.mock("../../hooks/useGetForecast", () => ({
  useGetForecast: () => forecastMock,
}));

describe("Navbar", () => {
  it("should render the navbar", () => {
    renderComponentWithProviders(<Navbar />);
    expect(screen.getByText("Current Weather")).toBeInTheDocument();
    expect(screen.getByText("Detailed Forecast")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for a city")
    ).toBeInTheDocument();
  });

  it("should not call the dispatch function when the user input is empty", async () => {
    renderComponentWithProviders(<Navbar />);
    const submitButton = screen.getByAltText("search button icon");
    await userEvent.click(submitButton);
    expect(useDispatch()).not.toHaveBeenCalled();
  });

  it("should call the dispatch function when the user fills in the input and submits", async () => {
    renderComponentWithProviders(<Navbar />);
    const input = screen.getByPlaceholderText("Search for a city");
    const submitButton = screen.getByAltText("search button icon");
    await userEvent.type(input, "Lisbon");
    await userEvent.click(submitButton);
    expect(useDispatch()).toHaveBeenCalled();
  });

  it("should navigate to another page when the link is clicked", async () => {
    renderComponentWithProviders(<Navbar />);
    const currentLink = screen.getByText("Current Weather");
    const nextLink = screen.getByText("Detailed Forecast");
    expect(currentLink).toHaveClass("nav-active");
    await userEvent.click(nextLink);
    expect(nextLink).toHaveClass("nav-active");
  });

  it("should toggle light and dark mode", async () => {
    renderComponentWithProviders(<Navbar />);
    const toggleButton = screen.getByTestId("light-dark");
    await userEvent.click(toggleButton);
    expect(useDispatch()).toHaveBeenCalled();
  });
});

describe("CurrentWeather", () => {
  it("should render current weather stats component with mocked store", () => {
    renderComponentWithProviders(<CurrentWeather />);
    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("light rain")).toBeInTheDocument();
    expect(screen.getByText("20°C")).toBeInTheDocument();
  });

  it("should assign the correct class to the temp window", () => {
    renderComponentWithProviders(<CurrentWeather />);
    expect(screen.getByTestId("weather-window")).toHaveClass("clouds");
  });
});

describe("CurrentWeatherStats", () => {
  it("should render exactly 6 stats", () => {
    renderComponentWithProviders(<CurrentWeatherStats />);
    const stats = screen.getAllByRole("img");
    expect(stats).toHaveLength(6);
  });

  it("should render the values of the six stats with the correct units", () => {
    renderComponentWithProviders(<CurrentWeatherStats />);
    expect(screen.getByText("19°C")).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("5m/s")).toBeInTheDocument();
    expect(screen.getByText("1018hPa")).toBeInTheDocument();
    expect(screen.getByText("6:39 am")).toBeInTheDocument();
    expect(screen.getByText("9:31 pm")).toBeInTheDocument();
  });

  it("should show descriptions of stats", () => {
    renderComponentWithProviders(<CurrentWeatherStats />);
    expect(screen.getByText("Feels Like")).toBeInTheDocument();
    expect(screen.getByText("Sunrise")).toBeInTheDocument();
  });
});

describe("FiveDayForecast", () => {
  it("should render five days of forecast", () => {
    renderComponentWithProviders(<FiveDayForecast />);
    expect(screen.getAllByText(/^H:.*/)).toHaveLength(5);
    expect(screen.getAllByText(/^L:.*/)).toHaveLength(5);
    expect(screen.getAllByRole("img")).toHaveLength(5);
  });

  it("should format the dates correctly", () => {
    renderComponentWithProviders(<FiveDayForecast />);
    expect(screen.getByText("Mon")).toBeInTheDocument();
    expect(screen.getByText("Wed")).toBeInTheDocument();
  });
});

describe("OneDayForecast", () => {
  it("should render 8 data points of forecast", () => {
    renderComponentWithProviders(<OneDayForecast />);
    expect(screen.getAllByText(/°C$/)).toHaveLength(8);
  });

  it("should format the dates correctly", () => {
    renderComponentWithProviders(<OneDayForecast />);
    expect(screen.getByText("Sun 12am")).toBeInTheDocument();
    expect(screen.getByText("Sun 9pm")).toBeInTheDocument();
  });
});

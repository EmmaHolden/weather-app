import "@testing-library/jest-dom";
import { vi } from "vitest";
import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
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
    expect(
      screen.getByText("Detailed Forecast for Doha, QA")
    ).toBeInTheDocument();
  });

  it("should display 5 days of forecast", () => {
    renderComponentWithProviders(<DetailedForecast />);
    expect(screen.getAllByText(/2025/)).toHaveLength(5);
  });

  it("should have no accessibility violations", async () => {
    const { container } = renderComponentWithProviders(<DetailedForecast />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

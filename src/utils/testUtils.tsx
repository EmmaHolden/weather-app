import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import currentCityReducer from "../redux/currentCity";
import themeReducer from "../redux/theme";
import { vi } from "vitest";

const queryClient = new QueryClient();

const rootReducer = combineReducers({
  currentCity: currentCityReducer,
  theme: themeReducer,
});

export const store = configureStore({ reducer: rootReducer });

export const renderComponentWithProviders = (
  children: ReactNode | ReactNode[]
) =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );

export const setUpMocks = () => {
  vi.mock("react-redux", async () => {
    const actual = await vi.importActual("react-redux");
    return {
      ...actual,
      useSelector: vi
        .fn()
        .mockImplementation((callback) => callback(store.getState())),
      useDispatch: vi.fn().mockReturnValue(vi.fn()),
    };
  });
  vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
      ...actual,
      useNavigate: () => vi.fn(),
    };
  });
  vi.doMock("@tanstack/react-query", async () => ({
    ...(await vi.importActual("@tanstack/react-query")),
    useQuery: vi.fn(),
  }));
};

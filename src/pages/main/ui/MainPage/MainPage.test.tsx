import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainPage } from "./MainPage";

jest.mock("../../../../shared/providers/AuthContext", () => ({
  useAuth: () => ({
    currentUser: null,
    logout: jest.fn(),
  }),
}));

jest.mock("../../../../features/ui", () => ({
  Button: ({ buttonText }: { buttonText: string }) => <button>{buttonText}</button>,
}));

jest.mock("../../../../components/LiquidChrome", () => ({
  LiquidChrome: ({ className }: { className?: string }) => (
    <div data-testid="liquid-chrome" className={className} />
  ),
}));

describe("MainPage", () => {
  it("renders a LiquidChrome background and overlay behind the content", () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MainPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("main-page-bg")).toBeInTheDocument();
    expect(screen.getByTestId("main-page-overlay")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});

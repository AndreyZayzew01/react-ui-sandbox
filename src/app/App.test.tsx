import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppShell } from "./App";

jest.mock("../shared/providers/UsersContext", () => ({
  UsersProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock("../shared/providers/AuthContext", () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock("../app/routing/RootRouting", () => ({
  RootRouting: () => <div data-testid="routing-outlet" />,
}));

describe("AppShell", () => {
  it("uses full-bleed layout on the home route", () => {
    render(
      <MemoryRouter initialEntries={["/"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppShell />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("app-shell")).toHaveClass("App--full-bleed");
  });

  it("keeps the standard layout on non-home routes", () => {
    render(
      <MemoryRouter initialEntries={["/login"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppShell />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("app-shell")).not.toHaveClass("App--full-bleed");
  });
});

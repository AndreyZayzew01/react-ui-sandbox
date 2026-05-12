import "./App.css";

import { UsersProvider } from "../shared/providers/UsersContext";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AuthProvider } from "../shared/providers/AuthContext";
import { DevRoleSwitcher } from "../shared";
import { cn } from "lib/utils";

import { RootRouting } from "./routing/RootRouting";

export function AppShell() {
  const showDevAuthPanel = false;
  const location = useLocation();
  const isFullBleedRoute = location.pathname === "/";

  return (
    <div
      className={cn("App", isFullBleedRoute && "App--full-bleed")}
      data-testid="app-shell"
    >
      <AuthProvider>
        <UsersProvider>
          {process.env.NODE_ENV === "development" && showDevAuthPanel && (
            <DevRoleSwitcher />
          )}
          <RootRouting />
        </UsersProvider>
      </AuthProvider>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;

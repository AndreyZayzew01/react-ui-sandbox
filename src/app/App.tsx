import "./App.css";

import { UsersProvider } from "../shared/providers/UsersContext";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../shared/providers/AuthContext";
import { DevRoleSwitcher } from "../shared";

import { RootRouting } from "./routing/RootRouting";

function App() {
  const showDevAuthPanel = false;

  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <UsersProvider>
            {process.env.NODE_ENV === "development" && showDevAuthPanel && (
              <DevRoleSwitcher />
            )}
            <RootRouting />
          </UsersProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { MainPage, UserPage } from "../pages/main/index";
import { UsersProvider } from "../shared/providers/UsersContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../shared/providers/AuthContext";
import { DevRoleSwitcher } from "../shared";
import { RequirePermission } from "../shared/providers/RequirePermission";
import { CabinetPage } from "../pages/main/ui/CabinetPage/CabinetPage";
import { RequireAuth } from "../shared/providers/RequireAuth";
import { LoginPage } from "../pages/main/ui/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <UsersProvider>
            {process.env.NODE_ENV === "development" && <DevRoleSwitcher />}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/users/:id" element={<UserPage />} />
              <Route path="*" element={<div>Page not found</div>} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/cabinet"
                element={
                  <RequireAuth
                    redirectTo="/login"
                    fallback={<div>Наобходимо авторизоваться</div>}
                  >
                    <RequirePermission
                      permission="view_cabinet"
                      fallback={<div>Доступ ограничен</div>}
                    >
                      <CabinetPage />
                    </RequirePermission>
                  </RequireAuth>
                }
              />
            </Routes>
          </UsersProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

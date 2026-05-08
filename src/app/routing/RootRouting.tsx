import { Routes, Route } from "react-router-dom";
import { RequirePermission } from "../../shared/providers/RequirePermission";
import { MainPage, UsersPage } from "../../pages/main";
import { LoginPage } from "../../pages/main/ui/LoginPage/LoginPage";
import { RequireAuth } from "../../shared/providers/RequireAuth";
import { CabinetPage } from "../../pages/main/ui/CabinetPage/CabinetPage";
import { MinesweeperPage, TicTacToePage } from "../../pages/games/index";

export function RootRouting() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/cabinet"
        element={
          <RequireAuth
            redirectTo="/login"
            fallback={<div>Необходимо авторизоваться</div>}
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
      <Route
        path="/cabinet/users"
        element={
          <RequireAuth
            redirectTo="/login"
            fallback={<div>Необходимо авторизоваться</div>}
          >
            <RequirePermission
              permission="view_cabinet"
              fallback={<div>Доступ ограничен</div>}
            >
              <UsersPage />
            </RequirePermission>
          </RequireAuth>
        }
      />
      <Route
        path="/games/minesweeper"
        element={
          <RequireAuth
            redirectTo="/login"
            fallback={<div>Необходимо авторизоваться</div>}
          >
            <RequirePermission
              permission="view_cabinet"
              fallback={<div>Доступ ограничен</div>}
            >
              <MinesweeperPage />
            </RequirePermission>
          </RequireAuth>
        }
      />
      <Route
        path="/games/tic-tac-toe"
        element={
          <RequireAuth
            redirectTo="/login"
            fallback={<div>Необходимо авторизоваться</div>}
          >
            <RequirePermission
              permission="view_cabinet"
              fallback={<div>Доступ ограничен</div>}
            >
              <TicTacToePage />
            </RequirePermission>
          </RequireAuth>
        }
      />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

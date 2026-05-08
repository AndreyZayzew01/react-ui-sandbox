import { Link } from "react-router-dom";
import { usePermission } from "../../../../shared/providers/auth/usePermission";
import { useAuth } from "../../../../shared/providers/AuthContext";
import { RequirePermission } from "../../../../shared/providers/RequirePermission";
import { Button } from "../../../../shared/ui/Button/Button";
import { AdminUsersPanel } from "./AdminUsersPanel/AdminUsersPanel";
import "./CabinetPage.css";

export function CabinetPage() {
  const { currentUser } = useAuth();
  const { edit_profile } = usePermission(["edit_profile"]);

  const { logout } = useAuth();

  return (
    <div className="cabinet-page">
      <div className="cabinet-page-header">
        <h1>Личный кабинет</h1>
        <Link to="/">
          <Button
            buttonText="Выйти"
            onClick={logout}
            tooltip="Выйти из кабинета"
          />
        </Link>
      </div>

      <div className="cabinet-page-profile">
        <div>Пользователь: {currentUser?.name ?? "Не авторизован"}</div>
        <div>Роль: {currentUser?.role ?? "-"}</div>
      </div>
      <div className="cabinet-page-actions">
        {edit_profile && (
          <Button
            buttonText="Редактировать профиль"
            onClick={() => console.log("редактирование профиля")}
            tooltip="Редактирование профиля"
          />
        )}
        <RequirePermission
          permission="create_user"
          fallback={<div>Нет доступа к панели управления пользователями</div>}
        >
          <AdminUsersPanel />
        </RequirePermission>
      </div>
      <div className="cabinet-page-button-section">
        <Link to="/cabinet/users">
          <Button buttonText="Список пользователей" />
        </Link>
        <Link to="/games/minesweeper">
          <Button buttonText="Играть в минёров" />
        </Link>
        <Link to="/games/tic-tac-toe">
          <Button buttonText="Играть в крестики нолики"/>
        </Link>
      </div>
    </div>
  );
}

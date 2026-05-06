import { useAuth } from "../../../../shared/providers/AuthContext";
import { Button } from "../../../../shared/ui/Button/Button";
import "./CabinetPage.css";

export function CabinetPage() {
  const { can } = useAuth();
  const canEditProfile = can("edit_profile");

  return (
    <div className="cabinet-page">
      <h1>Личный кабинет</h1>
      {canEditProfile ? (
        <div>
          <div className="cabinet-page-status">Можно редактировать профиль</div>
          <Button buttonText="Редактировать профиль" onClick={() => {}} />
        </div>
      ) : (
        <div className="cabinet-page-status">Нельзя редактировать профиль</div>
      )}
    </div>
  );
}

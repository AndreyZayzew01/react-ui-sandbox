import { Button } from "../../../../../shared/ui/Button/Button";

export function AdminUsersPanel() {
  return (
    <section className="admin-users-panel">
      <h2>Админ-панель управления пользователями</h2>
      <div className="admin-users-panel-actions">
        <Button
          buttonText="Создать пользователя"
          onClick={() => console.log("создание пользователя из админ-панели")}
        />
      </div>
    </section>
  );
}

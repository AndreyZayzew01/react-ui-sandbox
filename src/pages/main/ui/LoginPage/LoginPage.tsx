import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../shared/providers/AuthContext";
import { Role } from "../../../../entities/user/model/types";
import { FormEvent, useState } from "react";
import "./LoginPage.css";
import { Button } from "../../../../shared";

export const LoginPage = () => {
  const { loginAs, currentUser } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>( // начальное значение роли пользователя
    currentUser?.role || "guest", // если пользователь не авторизован, то устанавливаем роль гостя
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginAs(selectedRole);
    navigate("/cabinet");
  };

  if (currentUser) {
    return (
      <div>
        <h1 className="login-page-title">Вы уже авторизованы</h1>
        <button onClick={() => navigate("/cabinet")}>Перейти в кабинет</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={onSubmit} className="login-form">
        <label htmlFor="role">Выберите роль</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value as Role)}
        >
          <option value="admin">admin</option>
          <option value="user">user</option>
          <option value="guest">guest</option>
        </select>
        <button type="submit">Войти</button>
      </form>
      <Link to="/">
        <Button buttonText="На главную" />
      </Link>
    </div>
  );
};

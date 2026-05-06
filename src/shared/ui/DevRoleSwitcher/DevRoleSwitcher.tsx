import { useAuth } from "../../providers/AuthContext";
import { Role } from "../../../entities/user/model/types";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./DevRoleSwitcher.css";

/*
Компонент нужен для того чтобы можно было 
переключаться между ролями пользователей
для удобства разработки
*/

export function DevRoleSwitcher() {
  const { loginAs, logout, currentUser } = useAuth();

  return (
    <div className="dev-role-switcher">
      <span className="dev-role-switcher-status">
        Текущий:{" "}
        {currentUser
          ? `${currentUser.name} (${currentUser.role})`
          : "Не авторизован"}
      </span>
      <Button
        buttonText="Войти как админ"
        onClick={() => loginAs("admin" as Role)}
      />
      <Button
        buttonText="Войти как пользователь"
        onClick={() => loginAs("user" as Role)}
      />
      <Button
        buttonText="Войти как гость"
        onClick={() => loginAs("guest" as Role)}
      />
      <Button buttonText="Выйти" onClick={logout} />
      <Link to="/cabinet">
        <Button buttonText="Перейти в кабинет" />
      </Link>
    </div>
  );
}

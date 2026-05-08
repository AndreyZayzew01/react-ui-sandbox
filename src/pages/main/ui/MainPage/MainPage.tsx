import "./MainPage.css";
import { Button } from "../../../../features/ui";
import { useAuth } from "../../../../shared/providers/AuthContext";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h1 className="main-page-title">Добро пожаловать в систему!</h1>
      <div className="main-auth-actions">
        {!currentUser ? (
          <Link to="/login">
            <Button buttonText="Войти" />
          </Link>
        ) : (
          <>
            <Link to="/cabinet">
              <Button buttonText="Кабинет" />
            </Link>
            <Button buttonText="Выйти" onClick={logout} />
          </>
        )}
      </div>
    </div>
  );
};

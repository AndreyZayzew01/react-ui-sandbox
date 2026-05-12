import "./MainPage.css";
import { Button } from "../../../../features/ui";
import { useAuth } from "../../../../shared/providers/AuthContext";
import { Link } from "react-router-dom";
import { LiquidChrome } from "../../../../components/LiquidChrome";

export const MainPage = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="main-page-root">
      <div
        className="main-page-bg"
        data-testid="main-page-bg"
        aria-hidden="true"
      >
        <LiquidChrome
          className="main-page-bg-canvas"
          speed={0.3}
          amplitude={0.3}
          frequencyX={3}
          frequencyY={3}
          interactive
        />
      </div>
      <div
        className="main-page-overlay"
        data-testid="main-page-overlay"
        aria-hidden="true"
      />
      <div className="main-page-content">
        <div className="main-page-content-inner">
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
      </div>
    </div>
  );
};

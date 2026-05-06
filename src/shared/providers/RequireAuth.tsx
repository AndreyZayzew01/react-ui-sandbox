import { ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

type RequireAuthProps = {
  children: ReactNode;
  redirectTo: string;
  fallback: ReactNode;
};

/*Данный компонент используется для защиты маршрутов
которе используются только для авторизованых пользоватеелй
Его задача в том что если польователь не авторизован 
- показать ему редирект на страницу входа, 
либо показать "заглушку" - fallback
если же пользователь авторизован - 
- то показать страницу с контентом, который находится в children
*/

export function RequireAuth({
  children,
  redirectTo,
  fallback,
}: RequireAuthProps) {
  const { currentUser } = useAuth();

  // Проверка на авторизованного пользователя
  if (!currentUser) {
    if (redirectTo) return <Navigate to={redirectTo} replace />;
    return <>{fallback}</>;
  }
  return <>{children}</>;
}

/*
Ключевые параметры компонента:

children
То, что компонент должен рендерить, когда всё хорошо.
В нашем случае — это защищённое содержимое 
(например, JSX страницы дашборда).
Пример: <RequireAuth><Dashboard/></RequireAuth> 
— здесь <Dashboard/> и есть children.

fallback
Запасной вариант на случай, если пользователь не залогинен.
В этом компоненте fallback срабатывает, 
когда у нас нет currentUser и при этом не задан redirectTo. 
Можно передать, например, сообщение «Пожалуйста, войдите» 
и ссылку на страницу входа.
Пример: fallback={<LoginPrompt/>}.

Navigate
Готовый компонент из react-router-dom, 
который принудительно перенаправляет пользователя на другой адрес. 
Здесь он используется, если задан redirectTo и нет авторизации.
Пример: <Navigate to="/login" replace/> мгновенно 
перенесёт пользователя на /login,
и в истории браузера текущая страница будет заменена (флаг replace),
чтобы кнопка «назад» не возвращала обратно к защищённому маршруту.
*/

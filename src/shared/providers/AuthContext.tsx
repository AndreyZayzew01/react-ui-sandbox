import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { Permission, Role } from "../../entities/user/model/types";
import { getPermissionsByRole } from "../../entities/user/model/permission";
import { v4 as uuidv4 } from "uuid";

type CurrentUser = {
  id: string;
  name: string;
  role: Role;
};

type AuthContextValue = {
  currentUser: CurrentUser | null;
  permissions: readonly Permission[];
  loginAs: (role: Role) => void;
  logout: () => void;
  can: (permission: Permission) => boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  // массив разрешений для текущего пользователя
  const permissions = useMemo<readonly Permission[]>(
    () => (currentUser ? getPermissionsByRole(currentUser.role) : []),
    [currentUser],
  );

  // функция для логина в систему как определенная роль
  const loginAs = (role: Role) => {
    setCurrentUser({
      id: uuidv4(),
      name: `Demo ${role}`,
      role,
    });
  };

  // функция для выхода из системы
  const logout = () => {
    setCurrentUser(null);
  };
  // Функция для проверки наличия разрешения у текущего пользователя
  const can = (permission: Permission) => permissions.includes(permission);


  const value = {
    currentUser: currentUser as CurrentUser | null,
    permissions: permissions as readonly Permission[],
    loginAs: loginAs as (role: Role) => void,
    logout: logout as () => void,
    can: can as (permission: Permission) => boolean,
  };

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};


export const useAuth = () => {
  const value = useContext(AuthContext)
  if (value === null) { 
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return value
}
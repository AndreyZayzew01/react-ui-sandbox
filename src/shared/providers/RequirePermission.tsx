import { ReactNode } from "react";
import { Permission } from "../../entities/user/model/types";
import { useAuth } from "./AuthContext";

type RequirePermissionProps = {
  permission: Permission;
  children: ReactNode;
  fallback?: ReactNode;
};


/* Данный компонент используется для контроля 
доступа на уровне разрешений

Его задача в том что если пользователь не имеет 
необходимого разрешения - показать "заглушку" - fallback
если же пользователь имеет разрешение - 
- то показать контент, который находится в children
*/

export function RequirePermission({
  permission,
  children,
  fallback,
}: RequirePermissionProps) {
  const { can } = useAuth();

  if (!can(permission)) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}

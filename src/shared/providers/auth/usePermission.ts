import { Permission } from "../../../entities/user/model/types";
import { useAuth } from "../AuthContext";


//Как работает этот хук?

/**
 * Этот хук принимает массив разрешений и возвращает объект с ключами - 
 *разрешениями и значениями - boolean, которые определяют, 
 *имеет ли пользователь это разрешение или нет.
 * 
 * Например, если пользователь имеет разрешения 
 * ['view_main', 'view_cabinet'], то возвращаемый объект будет:
 * {
 *   view_main: true,
 *   view_cabinet: true,
 * }
 */
/*Функция usePermission принимает массив разрешений и
возвращает объект с ключами - разрешениями и значениями
- boolean, которые определяют, имеет ли пользователь это разрешение
 или нет.*/
export const usePermission = (permission: Permission[]) => {
  const { can } = useAuth();
  return permission.reduce(
    (acc, p) => ({ ...acc, [p]: can(p) }),
    {} as Record<Permission, boolean>,
  );
};

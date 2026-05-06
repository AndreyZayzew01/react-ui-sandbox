import { Permission, Role } from "./types";


// матрица разрешений для ролей пользователей
const ROLE_PERMISSIONS: Record<Role, readonly Permission[]> = {
  admin: ['view_main', 'view_cabinet', 'edit_profile', 'create_user'],
  user: ['view_main', 'view_cabinet', 'edit_profile'],
  guest: ['view_main', 'view_cabinet'],
}

// функция для получения прово доступа для роли пользователя
export function getPermissionsByRole(role: Role): readonly Permission[] {
  return ROLE_PERMISSIONS[role];
}

// функция для проверки наличия разрешения роли пользователя
export function hasPermission(
  role: Role, 
  permission: Permission,
): boolean {
  return getPermissionsByRole(role).includes(permission)  
}


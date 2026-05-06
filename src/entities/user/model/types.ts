export type Role = "admin" | "user" | "guest";

export type Permission =
  | "view_main"
  | "view_cabinet"
  | "edit_profile"
  | "create_user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  avatar: string;
  age: number;
  city: string;
  phone: string;
  registeredAt: string;
  rating: number;
}
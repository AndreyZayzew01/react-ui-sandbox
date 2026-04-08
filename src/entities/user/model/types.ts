export type UserRole = 'admin' | 'user' | 'editor';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  avatar: string;
  age: number;
  city: string;
  phone: string;
  registeredAt: string;
}

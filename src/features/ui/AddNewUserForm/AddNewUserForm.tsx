import { useState } from "react";
import "./AddNewUserForm.css";
import { Button } from "../../../shared/ui/Button/Button";
import { useUsers } from "../../../shared/providers/UsersContext";
import { Role, User } from "../../../entities/user/model/types";
import { v4 as uuidv4 } from "uuid";

const emptyUser: User = {
  id: uuidv4(),
  name: "",
  email: "",
  age: 0,
  city: "",
  phone: "",
  role: "user",
  isActive: true,
  avatar: "",
  registeredAt: "",
  rating: 0,
};

type AddNewUserFormProps = {
  setIsModalOpen: (isModalOpen: boolean) => void;
} 

export function AddNewUserForm({setIsModalOpen} : AddNewUserFormProps) {
  const [form, setForm] = useState<User>(emptyUser);
  const { users, setUsers } = useUsers();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => {
      if (name === "age") {
        const parsed = parseInt(value, 10);
        return {
          ...prev,
          age: value === "" || Number.isNaN(parsed) ? prev.age : parsed,
        };
      }
      if (name === "role") {
        return {
          ...prev,
          role: value as Role,
        };
      }
      return { ...prev, [name]: value } as User;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: form.name || "",
      email: form.email,
      age: form.age || 0,
      city: form.city || "",
      phone: form.phone || "",
      role: form.role as Role,
      isActive: true,
      avatar: "",
      registeredAt: new Date().toISOString(),
      rating: 0,
    };
    setUsers([newUser, ...users]);
    setForm(emptyUser as User);
    setIsModalOpen(false);
  };

  return (
    <div>
      <form className="add-new-user-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Имя пользователя</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Введите имя пользователя"
          value={form.name}
          className="add-new-user-form-input"
          onChange={handleInputChange}
        />
        <label htmlFor="email">Электронная почта</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Введите электронную почту "
          value={form.email}
          className="add-new-user-form-input"
          onChange={handleInputChange}
        />
        <label htmlFor="age">Возраст</label>
        <input
          id="age"
          name="age"
          type="text"
          placeholder="Введите возраст пользователя"
          value={form.age}
          className="add-new-user-form-input"
          onChange={handleInputChange}
        />
        <label htmlFor="city">Город</label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Введите город"
          value={form.city}
          className="add-new-user-form-input"
          onChange={handleInputChange}
        />
        <label htmlFor="role">Назначить роль</label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleInputChange}
          className="add-new-user-form-input"
        >
          <option value="admin">Администратор</option>
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
        </select>
        <label htmlFor="phone">Номер телефона</label>
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="Введите телефон "
          value={form.phone}
          className="add-new-user-form-input"
          onChange={handleInputChange}
        />
        <div className="add-new-user-form-actions">
          <Button buttonText="Добавить пользователя" type="submit" />
          <Button buttonText="Отмена" onClick={() => setIsModalOpen(false)} />
        </div>
      </form>
    </div>
  );
}

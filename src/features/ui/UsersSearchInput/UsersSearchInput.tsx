import { ChangeEvent, useState } from "react";
import { useUsers } from "../../../entities/user/model/UsersContext";
import { Button } from "../Button.tsx/Button";

export const UsersSearchInput = () => {
  const { users, setUsers, allUsers } = useUsers();
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchUser = () => {
    const filteredUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsers(filteredUsers);
  };

const handleResetSearch = () => {
  console.log(users)
  setUsers(allUsers)
  setSearchText("")
}

  return (
    <div>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        onChange={handleInputChange}
      />
      <Button buttonText="Поиск" onClick={handleSearchUser} />
      <Button buttonText="Сбросить поиск" onClick={handleResetSearch} /> 
    </div>
  );
};

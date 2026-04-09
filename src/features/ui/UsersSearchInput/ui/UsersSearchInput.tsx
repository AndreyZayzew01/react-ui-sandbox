import { ChangeEvent, useCallback, useState } from "react";
import { useUsers } from "../../../../entities/user/model/UsersContext";
import { Button } from "../../Button.tsx/Button";
import "./UsersSearchInput.css";

export const UsersSearchInput = () => {
  const { setUsers, allUsers } = useUsers();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchUser = useCallback(() => {
    const normalized = searchText.trim().toLowerCase();

    if (!normalized) {
      setUsers(allUsers);
      return;
    }

    const filtered = allUsers.filter((user) =>
      user.name.toLowerCase().includes(normalized),
    );

    setUsers(filtered);
  }, [searchText, allUsers, setUsers]);

  const handleResetSearch = () => {
    setUsers(allUsers);
    setSearchText("");
  };

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ): void {
    setSearchText(event.target.value);
  }

  return (
    <div className="users-search-field">
      <input
        type="text"
        value={searchText}
        placeholder="Введите имя пользователя"
        onChange={handleInputChange}
        className="users-search-input"
      />
      <Button buttonText="Поиск" onClick={handleSearchUser} />
      <Button buttonText="Сбросить поиск" onClick={handleResetSearch} />
    </div>
  );
};

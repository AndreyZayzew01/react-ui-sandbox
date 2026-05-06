import { ChangeEvent, useCallback, useState } from "react";
import { useUsers } from "../../../../shared/providers/UsersContext";
import { Button } from "../../../../shared/ui/Button/Button";
import "./UsersSearchInput.css";

export const UsersSearchInput = () => {
  const { setUsers, allUsers } = useUsers();
  const [searchText, setSearchText] = useState<string>("");
  const [searchNotFound, setSearchNotFound] = useState(false);

  const handleSearchUser = useCallback(() => {
    const normalized = searchText.trim().toLowerCase();

    if (!normalized) {
      setUsers(allUsers);
      setSearchNotFound(false);
      return;
    }

    const filtered = allUsers.filter((user) =>
      user.name.toLowerCase().includes(normalized),
    );

    setUsers(filtered);
    setSearchNotFound(filtered.length === 0 );
  }, [searchText, allUsers, setUsers, setSearchNotFound]);

  const handleResetSearch = () => {
    setUsers(allUsers);
    setSearchText("");
    setSearchNotFound(false);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
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
      {searchNotFound && <p className="search-not-found">По вашему запросу ничего не найдено</p>}
    </div>
  );
};

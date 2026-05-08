import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { UserCard } from "../../../../entities/user/ui/UserCard";
import { AddNewUserForm, Button } from "../../../../features/ui";
import { UsersSearchInput } from "../../../../features/ui/UsersSearchInput/ui/UsersSearchInput";
import { useAuth } from "../../../../shared/providers/AuthContext";
import { useUsers } from "../../../../shared/providers/UsersContext";
import { Pagination } from "../../../../shared/ui/Pagination/MainPagePagination";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { SortingAndFiltersSection } from "../MainPage/SortingAndFiltersSection";
import "../MainPage/MainPage.css";

export function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const { users } = useUsers();
  const { can, currentUser } = useAuth();

  const canCreateUser = !!currentUser && can("create_user");

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return users.slice(startIndex, endIndex);
  }, [currentPage, users]);

  return (
    <div>
      <div className="users-list">
        <h1>Список пользователей</h1>
        <Link to="/cabinet">
          <Button buttonText="Назад" />
        </Link>
        <UsersSearchInput />
        <div
          title={
            canCreateUser ? "" : "Недостаточно прав для создания пользователей"
          }
        >
          {currentUser && (
            <Button
              buttonText="Add New User"
              key={"add-new-user"}
              onClick={canCreateUser ? handleModalOpen : undefined}
              disabled={!canCreateUser}
            />
          )}
        </div>
        {isModalOpen ? (
          <Modal onClose={handleModalOpen} key={"modal"}>
            <AddNewUserForm setIsModalOpen={setIsModalOpen} />
          </Modal>
        ) : null}
        <SortingAndFiltersSection />
      </div>
      <UserCard users={paginatedUsers} />
      <Pagination
        data={users}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
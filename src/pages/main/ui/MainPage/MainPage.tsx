import "./MainPage.css";
import { UserCard } from "../../../../entities/user/ui/UserCard";
import { UsersSearchInput } from "../../../../features/ui/UsersSearchInput/ui/UsersSearchInput";
import { AddNewUserForm, Button } from "../../../../features/ui";
import { useMemo, useState } from "react";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { SortingAndFiltersSection } from "./SortingAndFiltersSection";
import { Pagination } from "../../../../shared/ui/Pagination/MainPagePagination";
import { useUsers } from "../../../../shared/providers/UsersContext";
import { useAuth } from "../../../../shared/providers/AuthContext";

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const { allUsers } = useUsers();
  const { can, currentUser } = useAuth();
  const allUsersData = useMemo(() => allUsers, [allUsers]);

  // проверка на наличие разрешения на создание пользователя
  const canCreateUser = !!currentUser && can("create_user");

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allUsers.slice(startIndex, endIndex);
  }, [currentPage, allUsers]);

  return (
    <div>
      <div className="users-list">
        <div>
          <UsersSearchInput />
        </div>
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
          )}{" "}
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
        data={allUsersData}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

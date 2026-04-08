import "./MainPage.css";
import { UserCard } from "../../../entities/user/ui/UserCard";
import { UsersSearchInput } from "../../../features/ui/UsersSearchInput/UsersSearchInput";

export const MainPage = () => {

  return (
    <div>
      <div className="users-list">
        <UsersSearchInput />
        <UserCard />
      </div>
    </div>
  );
};

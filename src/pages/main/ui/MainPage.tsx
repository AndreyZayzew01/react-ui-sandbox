import "./MainPage.css";
import { UserCard } from "../../../entities/user/ui/UserCard";
import { UsersSearchInput } from "../../../features/ui/UsersSearchInput/UsersSearchInput";

export const MainPage = () => {

console.log('MainPage');

  return (
    <div>
      <div className="users-list">
        <div className="users-search-input">
          <UsersSearchInput />
        </div>
        <UserCard />
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { useUsers } from "../../../shared/providers/UsersContext";
import "./UserCard.css";
import { User } from "../model/types";

type UserCardProps = {
  users: User[];
};

export function UserCard({ users }: UserCardProps) {
  const { setUsers } = useUsers();

  const toggleUserStatus = (id: string) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user,
      ),
    );
  };

  return (
    <div className="user-card-container">
      {users.map((user: User) => {
        return (
          <div className="user-card-item" key={user.id}>
            <button
              onClick={() => {
                toggleUserStatus(user.id);
              }}
            >
              {user.isActive ? "🟢" : "🔴"}
            </button>
            <Link to="/cabinet/users">
              <ul className="user-card">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>City: {user.city}</p>
                <p>Registered At: {user.registeredAt}</p>
                <p>Rating: {user.rating}</p>
              </ul>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

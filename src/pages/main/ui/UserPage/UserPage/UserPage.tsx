import { Link, useParams } from "react-router-dom";
import { useUsers } from "../../../../../shared/providers/UsersContext";
import { Role, User } from "../../../../../entities/user/model/types";
import { Button } from "../../../../../features";
import { useAuth } from "../../../../../shared/providers/AuthContext";
import "./UserPage.css";

export function UserPage() {
  const { id } = useParams();
  const { allUsers } = useUsers();
  const user = allUsers.find((item: User) => String(item.id) === id);
  const { loginAs } = useAuth();

  return (
    <div>
      {!user ? (
        <div>
          <div>User not found</div>
          <Link to="/">Back to the list</Link>
        </div>
      ) : (
        <div className="user-page-container">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.age}</p>
          <p>{user.city}</p>
          <p>{user.phone}</p>
          <p>{user.registeredAt}</p>
          <Link to="/">Back to the list</Link>
          <Button
            buttonText="Log In"
            onClick={() => loginAs(user.role as Role)}
          />
        </div>
      )}
    </div>
  );
}

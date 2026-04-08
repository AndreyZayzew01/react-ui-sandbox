import { User } from "../model/types";
import { useUsers } from "../model/UsersContext";


export function UserCard() {

  const {users} = useUsers();
  
  return (
    <div>
              {users.map((user: User) => {
          return (
            <ul key={user.id} className="user-card">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              <p>City: {user.city}</p>
            </ul>
          );
        })}
    </div>
  )
}
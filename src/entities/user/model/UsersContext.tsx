import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { User } from "./types";
import { dataUsers } from "../api/users";


export const UsersContext = createContext<UsersContextValue | null>(null)

type UsersContextValue = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  allUsers: User[];
}




export const UsersProvider = ({children} : PropsWithChildren) => {
  const [allUsers] = useState<User[]>(dataUsers); // стабильный оригинал
  const [users, setUsers] = useState<User[]>(dataUsers);

  
  const value: UsersContextValue = {
    users,
    setUsers,
    allUsers,
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider >
  )
}

export const useUsers = () => {
  const value = useContext(UsersContext);
  if (value === null || value === undefined) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return value;
};




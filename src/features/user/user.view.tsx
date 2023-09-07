import { useEffect } from "react";
import { fetchUsers } from "./user-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const UserView = () => {
  
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

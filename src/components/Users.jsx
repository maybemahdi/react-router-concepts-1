import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h3 className="text-xl font-bold my-5 col-span-3">User: {users.length}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;

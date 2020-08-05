import React from "react";
import styled from "styled-components";
import { User } from "../interfaces/User";
import fetchUsers from "../core/fetchUsers";

const UsersContainer = styled.div`
    padding: 20px;
    background-color: rgba(10,10,10,0.2);
`;

const Dashboard = () => {
  const [users, setUsers] = React.useState<
    Array<User>
  >([]);

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const users: Array<User> = await fetchUsers();
        setUsers(users);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getUsers();
  }, []);

  return (
    <UsersContainer>
      {users && users.length > 0
        ? <ul>
          {users.map((user) => (<li>
            {user.id}
            {user.email}
            {`${user.name}-${user.lastName}`}
          </li>))}
        </ul>
        : <div>
          There are no users
        </div>}
    </UsersContainer>
  );
};

export default Dashboard;

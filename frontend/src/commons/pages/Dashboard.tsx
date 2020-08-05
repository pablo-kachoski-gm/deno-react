import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
    padding: 20px;
    background-color: rgba(10,10,10,0.2);
`;

const Dashboard = () => {
  return (
    <AppContainer>
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </AppContainer>
  );
};

export default Dashboard;

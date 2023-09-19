import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { getUser, removeUserSession } from '../utils/common';

const Dashboard = props => {
  const history = useNavigate();
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history('/login');
  }

  return (


    <div>
          <Header />
          <SideBar />
      <div id="main">
          Welcome {user[0].name}!<br /><br />
          <input type="button" onClick={handleLogout} value="Logout" />
      </div>
    </div>
  );
}

export default Dashboard;
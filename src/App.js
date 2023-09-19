import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/login">Login</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
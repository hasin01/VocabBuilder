import React from 'react'
import { useAuth } from '../../context/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {

  const user = useAuth();
  const location = useLocation();


  if (user && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/dictionary" />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute
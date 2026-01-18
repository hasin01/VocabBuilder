import React from 'react'
import { useAuth } from '../../context/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const user = useAuth();
  return user ? <Navigate to="/dictionary" /> : <Outlet />;
}

export default PublicRoute

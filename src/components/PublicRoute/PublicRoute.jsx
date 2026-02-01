import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth/useAuth';

const PublicRoute = () => {
  const user = useAuth();
  return user ? <Navigate to="/dictionary" /> : <Outlet />;
}

export default PublicRoute

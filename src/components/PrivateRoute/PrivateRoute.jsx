import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth/useAuth';
import Loading from '../Loading/Loading';

const PrivateRoute = () => {
  const authData = useAuth();
  const { user, loading } = authData || {};

  if (loading) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
  
export default PrivateRoute
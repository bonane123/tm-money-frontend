import { Outlet, Navigate } from 'react-router-dom';
import { getAuthToken } from './auth';

const ProtectedRoute = ({role}) => {
  let storedValue = getAuthToken();

  if (!storedValue) {
    return <Navigate to='/login'/>
  }

  return storedValue.data.user.role === role ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  );
};

export default ProtectedRoute;

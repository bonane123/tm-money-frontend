import { Outlet, Navigate } from 'react-router-dom';
import { getAuthToken } from './auth';

const ProtectedDashboard = () => {
  let storedValue = getAuthToken();

  if (!storedValue) <Navigate to='/login' />;

  return storedValue.data.user.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  );
};

export default ProtectedDashboard;

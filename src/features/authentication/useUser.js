import { useQuery } from '@tanstack/react-query';
// import { getUser } from '../../services/users';
import { getAuthToken } from '../../utils/auth';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getAuthToken,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === 'admin',
  };
}

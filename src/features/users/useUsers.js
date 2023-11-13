import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../services/apiUsers';

export function useUsers() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

  return { isLoading, error, data };
}

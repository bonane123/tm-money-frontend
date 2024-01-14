import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsersTransactions } from '../../services/apiTransactions';


export function useUsersTransactions(userId) {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries(['userTransactions', userId]);

  const { isLoading, data, error } = useQuery({
    queryKey: ['userTransactions', userId],
    queryFn: ()=> getUsersTransactions(userId),
    staleTime: 10
  });

  return { isLoading, error, data };
}

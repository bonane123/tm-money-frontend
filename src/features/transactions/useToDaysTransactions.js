import { useQuery } from '@tanstack/react-query';
import { getToDaysTransactions } from '../../services/apiTransactions';

export function useToDaysTransactions() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['toDaysTransactions'],
    queryFn: getToDaysTransactions,
  });

  return { isLoading, error, data };
}

import { useQuery } from '@tanstack/react-query';
import { getStatTransactions } from '../../services/apiTransactions';

export function useStatTransactions() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['Transactions'],
    queryFn: getStatTransactions,
  });

  return { isLoading, error, data };
}
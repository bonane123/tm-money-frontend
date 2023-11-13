import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../../services/apiTransactions';

export function useTransactions() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['Transactions'],
    queryFn: getTransactions,
  });

  return { isLoading, error, data };
}

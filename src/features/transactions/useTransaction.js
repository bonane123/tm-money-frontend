import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getTransaction } from '../../services/apiTransactions';

export function useTransaction() {
  const { TransactionId } = useParams();

  const {
    isLoading,
    data: transaction,
    error,
  } = useQuery({
    queryKey: ['transaction', TransactionId],
    queryFn: () => getTransaction(TransactionId),
    retry: false,
  });
  return { isLoading, error, transaction };
}

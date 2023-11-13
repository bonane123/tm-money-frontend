
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTransaction } from '../../services/apiTransactions';
import { toast } from 'react-hot-toast';

export function useCreateTransaction(resetFunction) {
    const queryClient = useQueryClient();
  const { mutate: createNewTransaction, isTransactionLoading } = useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      toast.success(
        "Transaction created successfully"
      );
      queryClient.invalidateQueries({ queryKey: ['Transactions'] });
    },
    onError: (err) => toast.error(err.message),
    onSettled: (data, error) => {
        if (!error && resetFunction) {
            // This line resets the form on success
          resetFunction(); 
        }
      },
  });

  return { createNewTransaction, isTransactionLoading };
}

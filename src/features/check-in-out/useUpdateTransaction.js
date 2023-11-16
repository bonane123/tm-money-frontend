import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { updateTransaction } from '../../services/apiTransactions';

export function useUpdateTransaction() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updatedTransaction, isLoading: isConfirmed } = useMutation({
    mutationKey: 'updateTransaction',
    mutationFn: (transactionId) =>
      updateTransaction(transactionId, {
        status: 'confirmed',
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Transaction #${data.data.transaction.id} successfully confirmed`);
      queryClient.invalidateQueries({ active: true });
      navigate('/transactions');
    },
    onError: () => {
      toast.error('There was an error while checking in');
    },
  });

  return { updatedTransaction, isConfirmed };
}

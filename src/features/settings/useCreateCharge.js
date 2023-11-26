
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCharge } from '../../services/apiCharges';
import { toast } from 'react-hot-toast';

export function useCreateCharge(resetFunction) {
    const queryClient = useQueryClient();
  const { mutate: createNewCharge, isLoading: isCreating } = useMutation({
    mutationFn: createCharge,
    onSuccess: () => {
      toast.success(
        "Charge created successfully"
      );
      queryClient.invalidateQueries({ queryKey: ['charges'] });
    },
    onError: (err) => toast.error(err.message),
    onSettled: (data, error) => {
        if (!error && resetFunction) {
            // This line resets the form on success
          resetFunction(); 
        }
      },
  });

  return { createNewCharge, isCreating };
}

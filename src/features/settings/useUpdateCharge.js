import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateCharge as updateChargeApi } from '../../services/apiCharges';

export function useUpdateCharge() {
  const queryClient = useQueryClient();

  const { mutate: updateCharge, isLoading: isUpdating } = useMutation({
    mutationFn: updateChargeApi,
    onSuccess: () => {
      toast.success('Charge successfully edited');
      queryClient.invalidateQueries({ queryKey: ['charges'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateCharge };
}

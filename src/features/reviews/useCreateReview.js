
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview } from '../../services/apiReviews';
import { toast } from 'react-hot-toast';

export function useCreateReview(resetFunction) {
    const queryClient = useQueryClient();
  const { mutate: createNewReview, isLoading } = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      toast.success(
        "Thanks for your feedback"
      );
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (err) => toast.error(err.message),
    onSettled: (data, error) => {
        if (!error && resetFunction) {
            // This line resets the form on success
          resetFunction(); 
        }
      },
  });

  return { createNewReview, isLoading };
}

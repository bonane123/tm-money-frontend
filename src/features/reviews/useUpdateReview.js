import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateReview } from "../../services/apiReviews";
import toast from "react-hot-toast";

export function useUpdateReview() {
    const queryClient = useQueryClient();
  
    const { mutate: updateSingleReview, isLoading: isUpdating } = useMutation({
      mutationFn: updateReview,
      onSuccess: () => {
        toast.success('Review successfully edited');
        queryClient.invalidateQueries({ queryKey: ['reviews'] });
      }, 
      onError: (err) => toast.error(err.message),
    });
    return { isUpdating, updateSingleReview };
  }
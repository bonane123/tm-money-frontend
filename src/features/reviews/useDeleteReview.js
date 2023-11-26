import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview as deleteReviewAPI } from "../../services/apiReviews";
import toast from "react-hot-toast";

export function useDeleteReview() {
    const queryClient = useQueryClient();
  
    const { mutate: deleteReview, isLoading: isDeletingReview } = useMutation({
      mutationFn: deleteReviewAPI,
      onSuccess: () => {
        toast.success('Review has been deleted successfully');
        queryClient.invalidateQueries({ queryKey: ['reviews'] });
      },
      onError: (err) => toast.error(err.message),
    });
  
    return { deleteReview, isDeletingReview };
  }
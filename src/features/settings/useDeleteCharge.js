import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCharge as deleteChargeAPI } from "../../services/apiCharges";
import toast from "react-hot-toast";

export function useDeleteCharge() {
    const queryClient = useQueryClient();
  
    const { mutate: deleteCharge, isLoading: isDeletingCharge } = useMutation({
      mutationFn: deleteChargeAPI,
      onSuccess: () => {
        toast.success('Charge has been deleted successfully');
        queryClient.invalidateQueries({ queryKey: ['charges'] });
      },
      onError: (err) => toast.error(err.message),
    });
  
    return { deleteCharge, isDeletingCharge };
  }
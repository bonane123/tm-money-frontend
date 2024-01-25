import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCountries } from "../../services/apiCountries";
import toast from "react-hot-toast";

export function useUpdateCountries() {
  const queryClient = useQueryClient();

  const { mutate: updateSingleCountry, isLoading: isUpdating } = useMutation({
    mutationFn: updateCountries,
    onSuccess: () => {
      toast.success('Country data successfully updated');
      queryClient.invalidateQueries({ queryKey: ['countries'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSingleCountry };
}

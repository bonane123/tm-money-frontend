import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry } from "../../services/apiCountries";
import toast from "react-hot-toast";

export function useCreateCountry() {
  const queryClient = useQueryClient();

  const { mutate: createNewCountry, isLoading: isCreating } = useMutation({
    mutationFn: createCountry,
    onSuccess: () => {
      toast.success('Country successfully created');
      queryClient.invalidateQueries({ queryKey: ['countries'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNewCountry };
}

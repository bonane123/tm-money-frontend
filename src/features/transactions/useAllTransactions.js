import { useQuery } from "@tanstack/react-query";
import { getAllTransactions } from "../../services/apiTransactions";


export function useAllTransactions() {

  const {
    isLoading,
    data: { data: data, count } = {},
    error,
  } = useQuery({
    queryKey: ["allTransactions"],
    queryFn: getAllTransactions,
  });
  return { isLoading, error, data, count};
}

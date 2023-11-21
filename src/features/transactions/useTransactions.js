import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useTransactions() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: data, count } = {},
    error,
  } = useQuery({
    queryKey: ["Transactions", page],
    queryFn: ()=> getTransactions({page}),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["Transactions", page + 1],
      queryFn: () => getTransactions({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["Transactions", page - 1],
      queryFn: () => getTransactions({ page: page - 1 }),
    });
  return { isLoading, error, data, count, page };
}

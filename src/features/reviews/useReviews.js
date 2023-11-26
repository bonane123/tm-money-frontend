import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getReviews } from '../../services/apiReviews';
import { useSearchParams } from "react-router-dom";
// import { PAGE_SIZE } from "../../utils/constants";

export function useReviews() {

  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

    // PAGINATION
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const {
      isLoading,
      data: { data: data, count } = {},
      error,
    } = useQuery({
      queryKey: ["reviews", page],
      queryFn: ()=> getReviews({page}),
    });

      // PRE-FETCHING
  const pageCount = Math.ceil(count / 5);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["reviews", page + 1],
      queryFn: () => getReviews({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["reviews", page - 1],
      queryFn: () => getReviews({ page: page - 1 }),
    });
  
  return { isLoading, error, data, count, page };
}

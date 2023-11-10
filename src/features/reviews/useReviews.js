import { useQuery } from '@tanstack/react-query';
import { getTopReviews } from '../../services/apiReviews';

export function useReviews() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: getTopReviews,
  });

  return { isLoading, error, data };
}

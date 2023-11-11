import { useQuery } from '@tanstack/react-query';
import { getTopReviews } from '../../services/apiReviews';

export function useTopReviews() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['topreviews'],
    queryFn: getTopReviews,
  });

  return { isLoading, error, data };
}

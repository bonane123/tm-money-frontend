import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../services/apiReviews';

export function useReviews() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });

  return { isLoading, error, data };
}

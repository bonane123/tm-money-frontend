import { useQuery } from '@tanstack/react-query';
import { getAllCharges } from '../../services/apiCharges';

export function useSettings() {
  const {
    isLoading,
    error,
    data: charges,
  } = useQuery({
    queryKey: ['charges'],
    queryFn: getAllCharges,
  });

  return { isLoading, error, charges };
}

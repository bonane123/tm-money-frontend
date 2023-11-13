import { useQuery } from '@tanstack/react-query';
import { getAllCharges } from '../../services/apiCharges';

export function useCharges() {
  const { isLoading: isChargesLoading, data, error } = useQuery({
    queryKey: ['charges'],
    queryFn: getAllCharges,
  });

  return { isChargesLoading, error, data };
}

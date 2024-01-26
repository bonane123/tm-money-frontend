import { useQuery } from '@tanstack/react-query';
import { getAllBanks } from '../../services/apiBanks';

export function useBanks() {
  const {
    isLoading: isBanksLoading,
    error,
    data: banks,
  } = useQuery({
    queryKey: ['banks'],
    queryFn: getAllBanks,
  });

  return { isBanksLoading, error, banks };
}

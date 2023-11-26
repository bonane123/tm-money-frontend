import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../../services/apiCountries';

export function useCountries() {
  const {
    isLoading: isCountriesLoading,
    error,
    data: countriesList,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries,
  });

  return { isCountriesLoading, error, countriesList };
}

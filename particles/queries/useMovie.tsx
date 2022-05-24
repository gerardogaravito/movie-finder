import { useQuery } from 'react-query';
import { getMovieForTitle } from '../requests';
import useDebounce from 'hooks/useDebounce';
import { SearchResultType } from 'types/movies.types';

const useMovies = (title: string) => {
  const value = useDebounce(title, 800);
  return useQuery<SearchResultType>(
    ['movies', value],
    () => getMovieForTitle(value),
    {
      enabled: value.length > 0,
    }
  );
};

export default useMovies;

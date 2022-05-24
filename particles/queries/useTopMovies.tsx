import { useQuery } from 'react-query';
import { getTopMovies } from '../requests';
import { TopMoviesType } from 'types/movies.types';

const useMovies = () => {
  return useQuery<TopMoviesType>(['topMovies'], () => getTopMovies(), {
    enabled: true,
  });
};

export default useMovies;

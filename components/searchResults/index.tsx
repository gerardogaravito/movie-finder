import React, { FC } from 'react';
import { SearchResultType } from 'types/movies.types';
import { Container } from './styles';
import { MovieCard } from 'components';

interface ISearchResults {
  data: SearchResultType | undefined;
}

const SearchResults: FC<ISearchResults> = ({ data }) => {
  console.log(data);

  return (
    <Container>
      {data?.results &&
        data.results.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Container>
  );
};

export default SearchResults;

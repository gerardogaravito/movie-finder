import React, { FC, useState } from 'react';
import {
  MovieResultType,
  SearchResultType,
  TopMoviesType,
  TopMovieType,
} from 'types/movies.types';
import { Container, Button, SortContainer } from './styles';
import { MovieCard } from 'components';

interface ISearchResults {
  data: SearchResultType | TopMoviesType | undefined;
}

const SearchResults: FC<ISearchResults> = ({ data }) => {
  const [typeOfSort, setTypeOfSort] = useState<
    'smallestFirst' | 'largerFirst' | 'year' | ''
  >('');

  if (data?.items) {
    if (typeOfSort === 'largerFirst') {
      data.items.sort(function (a: TopMovieType, b: TopMovieType) {
        return Number(b.imDbRating) - Number(a.imDbRating);
      });
    }
    if (typeOfSort === 'smallestFirst') {
      data.items.sort(function (a: TopMovieType, b: TopMovieType) {
        return Number(a.imDbRating) - Number(b.imDbRating);
      });
    }
    if (typeOfSort === 'year') {
      data.items.sort(function (a: TopMovieType, b: TopMovieType) {
        return Number(a.year) - Number(b.year);
      });
    }
  }

  return (
    <Container>
      {data?.results &&
        data.results.map((movie: MovieResultType) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      {data?.items && (
        <>
          <SortContainer>
            <Button onClick={() => setTypeOfSort('year')}>
              Ordenar por Año
            </Button>
            <Button onClick={() => setTypeOfSort('largerFirst')}>
              Ordenar por mejor calificación
            </Button>
            <Button onClick={() => setTypeOfSort('smallestFirst')}>
              Ordenar por peor calificación
            </Button>
          </SortContainer>
          {data?.items.map((movie: TopMovieType) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </>
      )}
    </Container>
  );
};

export default SearchResults;

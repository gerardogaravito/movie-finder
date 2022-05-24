import { ID } from './common.types';

export type SearchResultType = {
  errorMessage: string | null;
  expression: string;
  results: MovieResultType[];
  searchType: string;
  items?: TopMovieType[];
};

export type MovieResultType = {
  description: string;
  id: ID;
  image: string;
  resultType: string;
  title: string;
};

export type TopMoviesType = {
  errorMessage: string | null;
  items: TopMovieType[];
  results?: MovieResultType[];
};

export type TopMovieType = {
  crew: string;
  fullTitle: string;
  id: ID;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  rank: string;
  title: string;
  year: string;
};

import { ID } from './common.types';

export type SearchResultType = {
  errorMessage: string | null;
  expression: string;
  results: MovieResultType[];
  searchType: string;
};

export type MovieResultType = {
  description: string;
  id: ID;
  image: string;
  resultType: string;
  title: string;
};

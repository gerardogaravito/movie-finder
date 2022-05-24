import { SearchResultType } from 'types/movies.types';

export const mockedData: SearchResultType = {
  errorMessage: null,
  expression: 'random',
  results: new Array(20).fill({
    description:
      'This movie was released on Summer of 2022. By the Director John Doe',
    id: 1010,
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180',
    resultType: 'movie',
    title: 'Title movie 1',
  }),
  searchType: '',
};

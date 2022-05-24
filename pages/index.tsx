import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import {
  SearchBar,
  Loading,
  SearchResults,
  LayoutContainer,
  ErrorMessage,
} from 'components';
import axios from 'axios';
import config from 'utils/config';
import { mockedData } from 'utils/mockedItems';
import { useMovie, useTopMovies } from 'particles/queries';
import { SearchResultType, TopMoviesType } from 'types/movies.types';

axios.defaults.baseURL = config.BASE_URL;

const Home: NextPage = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [mockedValues, setMockedValues] = useState<boolean>(false);
  const {
    data: dataSearchMovie,
    isLoading: isLoadingSearchMovie,
    isError: isErrorSearchMovie,
    isSuccess: isSuccessSearchMovie,
  } = useMovie(searchInput);

  const {
    data: dataTopMovie,
    isLoading: isLoadingTopMovie,
    isError: isErrorTopMovie,
    isSuccess: isSuccessTopMovie,
  } = useTopMovies();

  let isLoading = isLoadingTopMovie;
  let isError = isErrorTopMovie;
  let isSuccess = isSuccessTopMovie;
  let data: SearchResultType | TopMoviesType | undefined = dataTopMovie;

  if (searchInput) {
    isLoading = isLoadingSearchMovie;
    isError = isErrorSearchMovie;
    isSuccess = isSuccessSearchMovie;
    data = dataSearchMovie;
  }

  if (mockedValues) {
    isLoading = false;
    isError = false;
    isSuccess = true;
    data = mockedData;
  }

  const renderResults = () => {
    if (isLoading) {
      return <Loading />;
    }
    if (isError || data?.errorMessage) {
      return (
        <ErrorMessage
          setMockedValues={setMockedValues}
          errorMessage={data?.errorMessage}
        />
      );
    }
    if (isSuccess) {
      return (
        <LayoutContainer>
          <SearchResults data={data} />
        </LayoutContainer>
      );
    }
    return <></>;
  };

  return (
    <Fragment>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        mockedValues={mockedValues}
        setMockedValues={setMockedValues}
      />
      {renderResults()}
    </Fragment>
  );
};

export default Home;

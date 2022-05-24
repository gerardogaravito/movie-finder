import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import { SearchBar, Loading, SearchResults, LayoutContainer } from 'components';
import axios from 'axios';
import config from 'utils/config';
import { useMovie } from 'particles/queries';

axios.defaults.baseURL = config.BASE_URL;

const Home: NextPage = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const { data, isLoading, isError, isSuccess } = useMovie(searchInput);

  const renderResults = () => {
    if (isLoading) {
      return <Loading />;
    }
    if (isError || data?.errorMessage) {
      return <div>Error: {data?.errorMessage}</div>;
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
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {renderResults()}
    </Fragment>
  );
};

export default Home;

import React, { Dispatch, FC, SetStateAction } from 'react';
import {
  Container,
  Title,
  SearchLabel,
  SearchInput,
  SearchContainer,
  SearchButton,
} from './styles';

interface ISearchBar {
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchInput: string;
}

const SearchBar: FC<ISearchBar> = ({ setSearchInput, searchInput }) => {
  return (
    <Container>
      <Title>Movie Finder.</Title>
      <SearchContainer>
        <SearchLabel>Movie Search</SearchLabel>
        <SearchInput
          type='text'
          value={searchInput}
          onChange={(value) => {
            setSearchInput(String(value.target.value));
          }}
        ></SearchInput>
        {/* <SearchButton onClick={() => {}}>Buscar</SearchButton> */}
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;

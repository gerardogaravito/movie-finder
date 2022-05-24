import React, { Dispatch, FC, SetStateAction } from 'react';
import {
  Container,
  Title,
  SearchLabel,
  SearchInput,
  SearchContainer,
  MockButton,
} from './styles';

interface ISearchBar {
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchInput: string;
  setMockedValues: Dispatch<SetStateAction<boolean>>;
  mockedValues: boolean;
}

const SearchBar: FC<ISearchBar> = ({
  setSearchInput,
  searchInput,
  setMockedValues,
  mockedValues,
}) => {
  return (
    <Container>
      <Title>Movie Finder.</Title>
      {mockedValues && (
        <MockButton onClick={() => setMockedValues(false)}>
          Volver a componentes reales
        </MockButton>
      )}
      <SearchContainer>
        <SearchLabel>Movie Search</SearchLabel>
        <SearchInput
          type='text'
          value={searchInput}
          onChange={(value) => {
            setSearchInput(String(value.target.value));
          }}
        ></SearchInput>
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;

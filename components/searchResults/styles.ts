import styled from 'styled-components';
import { mainToWhiteNotInfinte } from 'styles/animations';

import Theme from 'styles/theme';

export const Container = styled.section`
  width: 816px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 12px 12px;

  @media ${Theme.mediaQueries.tablet} {
    justify-content: center;
    width: 100%;
  }
`;

export const Button = styled.button`
  background: none;
  margin-top: 24px;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.white};
  padding: 8px 12px;
  border-radius: 4px;

  :hover {
    ${mainToWhiteNotInfinte}
  }

  @media ${Theme.mediaQueries.tablet} {
    margin-top: 8px;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${Theme.mediaQueries.tablet} {
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

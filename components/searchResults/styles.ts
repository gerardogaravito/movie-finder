import styled from 'styled-components';

import Theme from 'styles/theme';

export const Container = styled.section`
  width: 900px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 12px 12px;

  @media ${Theme.mediaQueries.miniDesktop} {
  }
`;

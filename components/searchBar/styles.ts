import styled from 'styled-components';

import Theme from '../../styles/theme';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${Theme.mediaQueries.mobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1``;

export const Anchor = styled.a`
  color: ${Theme.colors.black};
  font-size: 14px;

  @media ${Theme.mediaQueries.mobile} {
    margin-top: 30px;
  }
`;

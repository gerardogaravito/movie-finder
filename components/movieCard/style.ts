import styled from 'styled-components';

import Theme from 'styles/theme';

export const Card = styled.div`
  width: 180px;
  height: 300px;
  border-radius: 4px;
  margin: 12px;
  background-color: ${Theme.colors.white};
  box-shadow: 3px 5px ${Theme.colors.main};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media ${Theme.mediaQueries.mobile} {
    flex-direction: row;
    width: 100%;
    height: 200px;
  }
`;

export const ImgCont = styled.div`
  background-color: ${Theme.colors.black};
  overflow: hidden;
  object-fit: cover;
  width: 180px;
  height: 200px;
  display: flex;
  justify-content: center;
  & :only-child {
    object-fit: cover;
  }
`;

export const InfoCont = styled.div`
  margin: 4px;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Title = styled.p`
  color: ${Theme.colors.main};
  font-weight: bold;
`;

export const Description = styled.small`
  color: ${Theme.colors.black};
  white-space: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: inherit;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  overflow: hidden;
`;

export const Title = styled.p`
  color: ${Theme.colors.main};
  font-weight: bold;
`;

export const Description = styled.small`
  color: ${Theme.colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: inherit;
`;

import styled from 'styled-components';

import Theme from 'styles/theme';
import { mainToWhite } from 'styles/animations';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 240px 12px 0px;
`;

export const FirstLoadingItem = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  background-color: ${Theme.colors.main};
  ${mainToWhite({ time: '3s', delay: `1s` })}
`;

export const SecondLoadingItem = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  margin: 0px 24px;
  background-color: ${Theme.colors.main};
  ${mainToWhite({ time: '3s', delay: `1.5s` })}
`;

export const ThirdLoadingItem = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  background-color: ${Theme.colors.main};
  ${mainToWhite({ time: '3s', delay: `2s` })}
`;

import styled from 'styled-components';

import Theme from 'styles/theme';
import { mainToWhiteNotInfinte } from 'styles/animations';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 240px 12px 0px;
`;

export const Text = styled.h3`
  color: ${Theme.colors.black};
  font-weight: bold;
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
`;

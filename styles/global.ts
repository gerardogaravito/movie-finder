import { createGlobalStyle } from 'styled-components';
import Theme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${Theme.fonts.font_system};
    box-sizing: border-box;
  }
  body {
    background-color: ${Theme.colors.beige};
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  h1 {
    font-size: ${Theme.fonts.h1};
    font-weight: bold;
  }
	h2 {
    font-size: ${Theme.fonts.h2};
    font-weight: normal;
  }
	h3 {
    font-size: ${Theme.fonts.h3};
    font-weight: normal;
  }
	p {
    font-size: ${Theme.fonts.p};
  }
	small {
    font-size: ${Theme.fonts.small};
  }
`;

import { css, keyframes } from 'styled-components';
import Theme from './theme';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

const mainToWhiteKeyframes = keyframes`
  from {
    background-color: ${Theme.colors.main};
    color: ${Theme.colors.white}
  }
  to {
    background-color: ${Theme.colors.pink};
    color: ${Theme.colors.main}
  }
`;

export const mainToWhite = ({
  time = '.5s',
  type = 'ease',
  delay = '0s',
} = {}) =>
  css`
    animation: ${time} ${mainToWhiteKeyframes} ${type};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-delay: ${delay};
  `;

export const mainToWhiteNotInfinte = ({ time = '.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${mainToWhiteKeyframes} ${type};
    animation-fill-mode: forwards;
  `;

const shadowEffectFrames = keyframes`
  from {
box-shadow: 3px 5px ${Theme.colors.main};
  }
  to {
box-shadow: 5px 10px ${Theme.colors.main};
  }
`;

export const shadowSearch = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${shadowEffectFrames} ${type};
    animation-fill-mode: forwards;
  `;

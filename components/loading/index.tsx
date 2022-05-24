import React, { FC } from 'react';
import {
  Container,
  FirstLoadingItem,
  SecondLoadingItem,
  ThirdLoadingItem,
} from './styles';

const Loading: FC = () => {
  return (
    <Container>
      <FirstLoadingItem />
      <SecondLoadingItem />
      <ThirdLoadingItem />
    </Container>
  );
};

export default Loading;

import React, { FC } from 'react';
import Image from 'next/image';
import { Card, ImgCont, InfoCont, Description, Title } from './style';
import { ID } from 'types/common.types';

interface IMovieCard {
  description: string;
  id: ID;
  image: string;
  resultType: string;
  title: string;
}

const MovieCard: FC<IMovieCard> = ({ image, title, description }) => {
  return (
    <Card>
      <ImgCont>
        <Image
          src={image}
          alt={`movie poster of ${title}`}
          width={180}
          height={200}
          layout='fixed'
        />
      </ImgCont>
      <InfoCont>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoCont>
    </Card>
  );
};

export default MovieCard;

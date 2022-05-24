import React, { FC } from 'react';
import Image from 'next/image';
import {
  Card,
  ImgCont,
  InfoCont,
  Description,
  Title,
  InfoColumn,
} from './style';
import { ID } from 'types/common.types';

interface IMovieCard {
  description?: string;
  id: ID;
  image: string;
  resultType?: string;
  title: string;
  crew?: string;
  fullTitle?: string;
  imDbRating?: string;
  imDbRatingCount?: string;
  rank?: string;
  year?: string;
}

const MovieCard: FC<IMovieCard> = ({
  image,
  title,
  description,
  imDbRating,
  year,
}) => {
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
        {description ? (
          <Description>{description}</Description>
        ) : (
          <InfoColumn>
            <Description>imDb Rating: {imDbRating}</Description>
            <Description>year: {year}</Description>
          </InfoColumn>
        )}
      </InfoCont>
    </Card>
  );
};

export default MovieCard;

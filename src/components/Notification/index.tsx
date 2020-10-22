import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

import * as S from './styles';

interface NotificationMovieProps {
  img: string;
  title: string;
  movie: string;
  days: string;
}
interface NotificationProps {
  count?: number;
  movies?: Array<NotificationMovieProps>;
}

export const Notification: React.FC<NotificationProps> = ({
  count,
  movies,
}) => {
  const [isShown, setIsShown] = useState(false);

  const renderMoviesList = (movie: NotificationMovieProps) => (
    <S.Item>
      <S.Link href="#">
        <S.Thumbnail src={movie?.img} alt={movie?.movie} />
        <S.TextWrapper>
          <S.Title>{movie?.title}</S.Title>
          <S.Title>{movie?.movie}</S.Title>
          <S.Days>{movie?.days}</S.Days>
        </S.TextWrapper>
      </S.Link>
    </S.Item>
  );

  return (
    <S.Wrapper>
      <S.Button
        aria-label="notification"
        role="button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <FaBell />
        {count && <S.Badge>{count}</S.Badge>}

        {isShown && (
          <S.Modal>{movies?.map(movie => renderMoviesList(movie))}</S.Modal>
        )}
      </S.Button>
    </S.Wrapper>
  );
};

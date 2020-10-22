import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { getQtdDimensions } from '../../helpers/getQtdDimensions';

import Loading from '../Loading';
import Card from '../Card';

import * as S from './styles';

interface SliderProps {
  type: string;
  list: string;
  title: string;
  original?: boolean;
  position?: boolean;
  percent?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  type,
  list,
  title,
  original,
  position,
  percent,
}) => {
  const [movies, setMovies] = useState([]);
  const [qtdCards, setQtdCards] = useState(2);
  const [page, setPage] = useState(1);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(async () => {
    await fetch(
      `https://api.themoviedb.org/3/${type}/${list}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
    )
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);

        setIsLoading(false);
      });
  }, [type, list]);

  const getQtdCardsVisible = useCallback(() => {
    setQtdCards(getQtdDimensions());
  }, []);

  const handlePage = useCallback(
    (direction: number) => {
      const nextPage = page + direction;
      setPage(nextPage);

      setHasPrev(true);
      setHasNext(true);

      if (nextPage <= 1) {
        return setHasPrev(false);
      } else if (
        nextPage >=
        movies
          .filter(
            ({ backdrop_path, poster_path }) =>
              backdrop_path !== null && poster_path !== null,
          )
          .slice(0, position ? 10 : 50).length /
          qtdCards
      ) {
        return setHasNext(false);
      } else {
        setHasPrev(true);
        setHasNext(true);
      }
    },
    [movies, page, qtdCards, position],
  );

  useEffect(() => {
    setIsLoading(true);
    getQtdCardsVisible();

    getMovies();

    window.addEventListener('resize', getQtdCardsVisible);
    return () => window.removeEventListener('resize', getQtdCardsVisible);
  }, [getMovies, getQtdCardsVisible]);

  if (isLoading) return <Loading qtdCards={qtdCards} />;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.SliderContainer>
        <S.Content qtdCards={qtdCards} page={page}>
          {movies
            .filter(
              ({ backdrop_path, poster_path }) =>
                backdrop_path !== null && poster_path !== null,
            )
            .slice(0, position ? 10 : 50)
            .map(({ id, title, name, backdrop_path, poster_path }, index) => (
              <Card
                key={id}
                cardId={id}
                type={type}
                title={title || name}
                poster={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                backdrop={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
                orientation={original ? 'vertical' : 'horizontal'}
                position={position ? index + 1 : 0}
                percent={percent ? Math.floor(Math.random() * 99 + 1) : 0}
              />
            ))}
        </S.Content>

        <S.Button
          id="previous-button"
          title="Previous"
          direction="prev"
          isVisible={hasPrev}
          disabled={!hasPrev}
          onClick={() => {
            handlePage(-1);
          }}
        >
          <FaChevronLeft />
        </S.Button>
        <S.Button
          id="next-button"
          title="Next"
          direction="next"
          isVisible={hasNext}
          disabled={!hasNext}
          onClick={() => {
            handlePage(1);
          }}
        >
          <FaChevronRight />
        </S.Button>
      </S.SliderContainer>
    </S.Container>
  );
};

export default Slider;

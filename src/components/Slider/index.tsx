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
}

const Slider: React.FC<SliderProps> = ({
  type,
  list,
  title,
  original = false,
}) => {
  const [movies, setMovies] = useState([]);
  const [qtdCards, setQtdCards] = useState(2);
  const [page, setPage] = useState(1);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(() => {
    fetch(
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

      if (nextPage <= 1) {
        return setHasPrev(false);
      } else if (nextPage >= movies.length / qtdCards) {
        return setHasNext(false);
      }

      setHasPrev(true);
      setHasNext(true);
    },
    [movies, page, qtdCards],
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

      <S.SliderContainer orientation={original ? 'vertical' : 'horizontal'}>
        <S.Content
          qtdCards={qtdCards}
          page={page}
          orientation={original ? 'vertical' : 'horizontal'}
        >
          {movies
            .filter(
              ({ backdrop_path, poster_path }) =>
                backdrop_path !== null && poster_path !== null,
            )
            .map(({ id, title, name, backdrop_path, poster_path }) => (
              <Card
                key={id}
                title={title || name}
                bgImage={`http://image.tmdb.org/t/p/w500/${
                  original ? poster_path : backdrop_path
                }`}
                orientation={original ? 'vertical' : 'horizontal'}
              />
            ))}
        </S.Content>

        {hasPrev && (
          <S.Button
            id="previous-button"
            title="Previous"
            direction="prev"
            onClick={() => {
              handlePage(-1);
            }}
          >
            <FaChevronLeft />
          </S.Button>
        )}
        {hasNext && (
          <S.Button
            id="next-button"
            title="Next"
            direction="next"
            onClick={() => {
              handlePage(1);
            }}
          >
            <FaChevronRight />
          </S.Button>
        )}
      </S.SliderContainer>
    </S.Container>
  );
};

export default Slider;

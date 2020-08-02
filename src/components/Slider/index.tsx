import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Card from '../Card';

import * as S from './styles';

interface SliderProps {
  title: string;
}

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';

const Slider: React.FC<SliderProps> = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [qtdCards, setQtdCards] = useState(2);
  const [page, setPage] = useState(1);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    getMovies('popular');

    getDimensions();

    window.addEventListener('resize', getDimensions);
    return () => window.removeEventListener('resize', getDimensions);
  }, []);

  const getMovies = (type: String) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=pt-BR`,
    )
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);
      });
  };

  const getDimensions = () => {
    const { innerWidth: width } = window;

    let qtd = 2;

    if (width >= 1800) {
      qtd = 6;
    } else if (width >= 1500) {
      qtd = 5;
    } else if (width >= 1000) {
      qtd = 4;
    } else if (width >= 800) {
      qtd = 3;
    } else if (width >= 600) {
      qtd = 2;
    } else {
      qtd = 1;
    }

    setQtdCards(qtd);
  };

  const handlePage = (direction: number) => {
    const nextPage = page + direction;
    setPage(nextPage);

    if (nextPage <= 1) {
      return setHasPrev(false);
    } else if (nextPage >= movies.length / qtdCards) {
      return setHasNext(false);
    }

    setHasPrev(true);
    setHasNext(true);
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.SliderContainer>
        <S.Content qtdCards={qtdCards} page={page}>
          {movies.map(({ id, title, backdrop_path }) => (
            <Card
              key={id}
              title={title}
              bgImage={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
            />
          ))}
        </S.Content>

        {hasPrev && (
          <S.Button
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

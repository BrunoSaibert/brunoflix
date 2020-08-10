import React, { useState, useEffect, useCallback } from 'react';

import Loading from '../../components/Loading';
import Card from '../../components/Card';

import { getQtdDimensions } from '../../helpers/getQtdDimensions';

import * as S from './styles';

const MyList: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [qtdCards, setQtdCards] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
    )
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);

        setIsLoading(false);
      });
  }, []);

  const getQtdCardsVisible = useCallback(() => {
    setQtdCards(getQtdDimensions());
  }, []);

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
      <S.Title>Minha Lista</S.Title>

      <S.Content qtdCards={qtdCards}>
        {movies
          .filter(({ backdrop_path }) => backdrop_path !== null)
          .map(({ id, title, name, backdrop_path }) => (
            <Card
              key={id}
              title={title || name}
              bgImage={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
              orientation="horizontal"
            />
          ))}
      </S.Content>
    </S.Container>
  );
};

export default MyList;

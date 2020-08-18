import React, { useState, useEffect, useCallback } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import { getQtdDimensions } from '../../helpers/getQtdDimensions';

import Loading from '../Loading';

import * as S from './styles';

interface HeroProps {
  type?: string;
  id?: number;
}

interface MovieProps {
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  last_air_date: string;
  number_of_seasons: number;
}

const Hero: React.FC<HeroProps> = ({ type, id }) => {
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);
  const [qtdCards, setQtdCards] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const getMovie = useCallback(async () => {
    await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        setIsLoading(false);

        setMovie(response);
      });
  }, [type, id]);

  const getQtdCardsVisible = useCallback(() => {
    setQtdCards(getQtdDimensions());
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getQtdCardsVisible();

    getMovie();
  }, [getMovie, getQtdCardsVisible]);

  if (isLoading) return <Loading qtdCards={qtdCards} />;

  return (
    <S.Container
      bgImage={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    >
      <S.Content>
        <S.Title>{movie.title || movie.name}</S.Title>

        <S.InfoList>
          <S.Info>
            {String(
              new Date(movie.release_date || movie.last_air_date).getFullYear(),
            )}
          </S.Info>
          <S.Info badge>16</S.Info>
          {movie.number_of_seasons && (
            <S.Info>{movie.number_of_seasons} Temporadas</S.Info>
          )}
        </S.InfoList>

        <S.Sinopse>{movie.overview}</S.Sinopse>

        <S.ButtonGroup>
          <S.Button>
            <FaPlay /> Assistir
          </S.Button>

          <S.Button variant="secondary">
            <FaInfoCircle /> Mais informações
          </S.Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Hero;

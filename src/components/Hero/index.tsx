import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import * as S from './styles';

import logo from '../../assets/Hero/dark-logo.png';
import background from '../../assets/Hero/dark-wallpaper.jpg';

const Hero: React.FC = () => {
  return (
    <S.Container bgImage={background}>
      <S.Content>
        <S.Logo src={logo} alt="Netfake" />

        <S.InfoList>
          <S.Info>2020</S.Info>
          <S.Info badge>16</S.Info>
          <S.Info>3 Temporadas</S.Info>
        </S.InfoList>

        <S.Synopse>
          Em 2019, o desaparecimento de um menino gera medo entre os moradores
          de Winden, uma pequena cidade alemã com uma história estranha e
          trágica.
        </S.Synopse>

        <S.ButtonGroup>
          <S.Button>
            <FaPlay /> Assistir
          </S.Button>

          <S.Button variant="secundary">
            <FaInfoCircle /> Mais insformações
          </S.Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Hero;

import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Social>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaYoutube />
        </li>
      </S.Social>

      <S.Nav>
        <ul>
          <li>Idiomas e legendas</li>
          <li>Imprensa</li>
          <li>Privacidade</li>
          <li>Entre em contato</li>
        </ul>
        <ul>
          <li>Audiodescrição</li>
          <li>Relações com investidores</li>
          <li>Avisos legais</li>
        </ul>
        <ul>
          <li>Centro de ajuda</li>
          <li>Carreiras</li>
          <li>Preferências de cookies</li>
        </ul>
        <ul>
          <li>Cartão pré-pago</li>
          <li>Termos de uso</li>
          <li>Informações corporativas</li>
        </ul>
      </S.Nav>

      <button type="button">Código de serviço</button>

      <S.Copy>&copy; 1991-{new Date().getFullYear()} Brunoflix, Inc.</S.Copy>
    </S.Container>
  );
};

export default Footer;

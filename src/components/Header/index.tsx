import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

import logo from '../../assets/brunoflix.png';

import * as S from './styles';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container isScrolled={isScrolled}>
      <S.Content>
        <S.Logo src={logo} alt="Brunoflix" />

        <S.Nav>
          <S.NavLink>
            <Link to="/" className={pathname === '/' ? 'active' : ''}>
              Início
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/series"
              className={pathname === '/series' ? 'active' : ''}
            >
              Séries
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/movies"
              className={pathname === '/movies' ? 'active' : ''}
            >
              Filmes
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/latest"
              className={pathname === '/latest' ? 'active' : ''}
            >
              Mais recentes
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link
              to="/my-list"
              className={pathname === '/my-list' ? 'active' : ''}
            >
              Minha lista
            </Link>
          </S.NavLink>
        </S.Nav>
      </S.Content>

      <S.Actions>
        <FaSearch />
        <FaBell />
        <FaUser />
      </S.Actions>
    </S.Container>
  );
};

export default Header;

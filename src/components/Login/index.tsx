import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import UserAvatar from '../../assets/project/avatar-user.png';
import KidsAvatar from '../../assets/project/avatar-kids.png';

import * as S from './styles';

interface LoginProps {
  loggedIn: boolean;
}

export const Login: React.FC<LoginProps> = ({ loggedIn }) => {
  const [isShown, setIsShown] = useState(false);

  if (!loggedIn) {
    return (
      <S.Button aria-label="user" role="button">
        <FaUser />
      </S.Button>
    );
  }

  return (
    <S.Wrapper>
      <S.Button
        aria-label="user"
        role="button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <S.Thumbnail
          src={UserAvatar}
          alt="Avatar"
          width="40"
          height="40"
          margin="10"
        />
        <S.ArrowDown />

        {isShown && (
          <S.Modal>
            <S.Item>
              <S.Link href="#">
                <S.Thumbnail
                  src={KidsAvatar}
                  alt="Avatar"
                  width="30"
                  height="30"
                />
                <S.Title style={{ marginLeft: '10px' }}>Crianças</S.Title>
              </S.Link>
            </S.Item>
            <S.Item>
              <S.Link href="#">
                <S.Title>Gerenciar Perfil</S.Title>
              </S.Link>
            </S.Item>
            <S.Item border>
              <S.Link href="#">
                <S.Title>Crianças</S.Title>
              </S.Link>
            </S.Item>
            <S.Item top>
              <S.Link href="#">
                <S.Title highlight>Conta</S.Title>
              </S.Link>
            </S.Item>
            <S.Item middle>
              <S.Link href="#">
                <S.Title highlight>Central de ajuda</S.Title>
              </S.Link>
            </S.Item>
            <S.Item down>
              <S.Link href="#">
                <S.Title highlight>Sair de Brunoflix</S.Title>
              </S.Link>
            </S.Item>
          </S.Modal>
        )}
      </S.Button>
    </S.Wrapper>
  );
};

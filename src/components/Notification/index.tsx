import React from 'react';
import { FaBell } from 'react-icons/fa';

import * as S from './styles';

interface NotificationProps {
  count?: number;
}

export const Notification: React.FC<NotificationProps> = ({ count }) => {
  return (
    <S.Button>
      <FaBell />
      {count && <S.Badge>{count}</S.Badge>}
    </S.Button>
  );
};

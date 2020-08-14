import React from 'react';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import * as S from './styles';

interface CardProps {
  bgImage: string;
  title: string;
  orientation: 'vertical' | 'horizontal';
}

const Card: React.FC<CardProps> = ({ bgImage, title, orientation }) => {
  return (
    <S.Container bgImage={bgImage} orientation={orientation}>
      <S.Content>
        <S.Actions>
          <S.ActionItem isActive>
            <FaPlay />
          </S.ActionItem>
          <S.ActionItem>
            <FaCheck />
          </S.ActionItem>
          <S.ActionItem>
            <AiOutlineLike />
          </S.ActionItem>
          <S.ActionItem>
            <AiOutlineDislike />
          </S.ActionItem>
        </S.Actions>

        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
};

export default Card;

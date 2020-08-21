import React from 'react';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

interface CardProps {
  cardId: number;
  type: string;
  bgImage: string;
  title: string;
  orientation: 'vertical' | 'horizontal';
}

const Card: React.FC<CardProps> = ({
  cardId,
  type,
  bgImage,
  title,
  orientation,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/watch/${type}/${cardId}`);
  };

  return (
    <S.Container
      bgImage={bgImage}
      orientation={orientation}
      onClick={handleClick}
    >
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

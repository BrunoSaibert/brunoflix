import React from 'react';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <S.Progress>
      <S.Bar percent={percent} />
    </S.Progress>
  );
};

interface CardProps {
  cardId: number;
  type: string;
  poster: string;
  backdrop: string;
  title: string;
  orientation: 'vertical' | 'horizontal';
  position?: number;
  percent?: number;
}

const Card: React.FC<CardProps> = ({
  cardId,
  type,
  poster,
  backdrop,
  title,
  orientation,
  position,
  percent,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/watch/${type}/${cardId}`);
  };

  return (
    <S.Container orientation={orientation} onClick={handleClick}>
      <S.Image
        bgImage={position ? backdrop : ''}
        orientation={orientation}
        position={!!position}
      >
        {!!position && <p>{position}</p>}
        <img
          src={position || orientation === 'vertical' ? poster : backdrop}
          alt={title}
        />
      </S.Image>

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

      {!!percent && <ProgressBar percent={percent} />}
    </S.Container>
  );
};

export default Card;

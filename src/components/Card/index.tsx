import React from 'react';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import daredevil from '../../assets/Card/daredevil-card.jpg';
import dark from '../../assets/Card/dark-card.jpg';

import * as S from './styles';

const Card: React.FC = () => {
  return (
    <S.Warpper qtdCards={4}>
      <S.Container bgImage={daredevil}>
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

          <S.Title>Daredevil</S.Title>
        </S.Content>
      </S.Container>

      <S.Container bgImage={dark}>
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

          <S.Title>Dark</S.Title>
        </S.Content>
      </S.Container>
      <S.Container bgImage={daredevil}>
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

          <S.Title>Daredevil</S.Title>
        </S.Content>
      </S.Container>

      <S.Container bgImage={dark}>
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

          <S.Title>Dark</S.Title>
        </S.Content>
      </S.Container>
      <S.Container bgImage={daredevil}>
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

          <S.Title>Daredevil</S.Title>
        </S.Content>
      </S.Container>

      <S.Container bgImage={dark}>
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

          <S.Title>Dark</S.Title>
        </S.Content>
      </S.Container>
      <S.Container bgImage={daredevil}>
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

          <S.Title>Daredevil</S.Title>
        </S.Content>
      </S.Container>

      <S.Container bgImage={dark}>
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

          <S.Title>Dark</S.Title>
        </S.Content>
      </S.Container>
      <S.Container bgImage={daredevil}>
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

          <S.Title>Daredevil</S.Title>
        </S.Content>
      </S.Container>

      <S.Container bgImage={dark}>
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

          <S.Title>Dark</S.Title>
        </S.Content>
      </S.Container>
    </S.Warpper>
  );
};

export default Card;

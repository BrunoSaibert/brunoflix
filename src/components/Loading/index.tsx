import React from 'react';

import * as S from './styles';

interface LoadingProps {
  qtdCards: number;
}

const Loading: React.FC<LoadingProps> = ({ qtdCards }) => {
  const BoxList = [];

  for (let index = 0; index < qtdCards + 1; index++) {
    BoxList.push(
      <S.Box
        key={index}
        id={`loading-${index + 1}`}
        delay={index}
        qtdCards={qtdCards}
      />,
    );
  }

  return <S.Container data-testid="loading">{BoxList}</S.Container>;
};

export default Loading;

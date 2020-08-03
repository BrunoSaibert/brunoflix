import React from 'react';

import * as S from './styles';

interface LoadingProps {
  qtdCards: number;
}

const Loading: React.FC<LoadingProps> = ({ qtdCards }) => {
  const BoxList = [];

  for (let index = 0; index < qtdCards + 1; index++) {
    BoxList.push(<S.Box key={index} delay={index} qtdCards={qtdCards} />);
  }

  return <S.Container>{BoxList}</S.Container>;
};

export default Loading;

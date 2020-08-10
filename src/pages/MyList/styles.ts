import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px calc(4% - 4px) 0;
`;

export const Title = styled.p`
  font-size: 24px;
  margin: 0 4px 16px;
`;

interface ContentProps {
  qtdCards: number;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  transition: all 0.6s ease-in-out;

  .card {
    flex: 0 0
      calc(
        (100% - ${prop => prop.qtdCards - 1} * 8px) / ${prop => prop.qtdCards}
      );
    margin: 36px 2px;

    &:hover {
      margin: -30px 2px;
    }

    &:nth-child(${prop => prop.qtdCards}n + 1) {
      transform-origin: left;
    }

    &:nth-child(${prop => prop.qtdCards}n + ${prop => prop.qtdCards}) {
      transform-origin: right;
    }
  }
`;

import styled, { keyframes } from 'styled-components';

export const Container = styled.section.attrs({
  className: 'loading',
})`
  display: flex;
  align-items: flex-start;
  min-height: 1000px;

  padding: 0 4%;
  height: 230px;
`;

const pulsate = keyframes`
  from {
    background-color: #1a1a1a
  }
  25% {
    background-color: #333
  }
  50% {
    background-color: #1a1a1a
  }
  to {
    background-color: #1a1a1a
  }
  `;

interface BoxProps {
  delay: number;
  qtdCards: number;
}

export const Box = styled.div.attrs({
  className: 'card',
})<BoxProps>`
  flex: 0 0
    calc((100% - ${prop => prop.qtdCards - 1} * 4px) / ${prop => prop.qtdCards});

  height: 150px;
  background: #333;

  animation: ${pulsate} 2s linear infinite;
  animation-delay: ${props => props.delay * 0.2}s;

  & + .card {
    margin-left: 4px;
  }
`;

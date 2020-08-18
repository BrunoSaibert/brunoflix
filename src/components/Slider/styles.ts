import styled, { css } from 'styled-components';

export const Container = styled.section.attrs({
  className: 'slider',
})`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 0 4%;

  position: relative;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  position: absolute;
  top: 10px;
`;

interface SliderContainerProps {
  orientation: 'vertical' | 'horizontal';
}

export const SliderContainer = styled.div<SliderContainerProps>`
  position: relative;

  button.control {
    height: ${prop => (prop.orientation === 'vertical' ? '400px' : '150px')};
  }
`;

interface ContentProps {
  qtdCards: number;
  page: number;
  orientation: 'vertical' | 'horizontal';
}

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  height: ${prop => (prop.orientation === 'vertical' ? '470px' : '230px')};

  transition: all 0.6s ease-in-out;
  position: relative;
  left: calc((100% + 4px) * -${prop => prop.page - 1});

  .card {
    flex: 0 0
      calc(
        (100% - ${prop => prop.qtdCards - 1} * 4px) / ${prop => prop.qtdCards}
      );

    &:nth-child(${prop => prop.qtdCards * prop.page - (prop.qtdCards - 1)}) {
      transform-origin: left;
    }

    &:nth-child(${prop => prop.qtdCards * prop.page}) {
      transform-origin: right;
    }
  }
`;

interface ButtonProps {
  direction: 'next' | 'prev';
}

export const Button = styled.button.attrs({
  className: 'control',
  type: 'button',
})<ButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 4%;

  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  z-index: 4;
  cursor: pointer;

  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in;

  svg {
    transition: all 0.3s ease-in-out;
    fill: #fff;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);

    svg {
      transform: scale(2);
    }
  }

  ${prop =>
    prop.direction === 'next' &&
    css`
      right: calc(-4% - 4px);
    `}

  ${prop =>
    prop.direction === 'prev' &&
    css`
      left: calc(-4% - 4px);
    `}
`;

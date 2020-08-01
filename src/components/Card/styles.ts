import styled, { css } from 'styled-components';

interface WarpperProps {
  qtdCards: number;
}

export const Warpper = styled.section<WarpperProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 4%;

  & > .card {
    flex: 0 0
      calc(
        (100% - (${prop => prop.qtdCards - 1} * 4px)) / ${prop => prop.qtdCards}
      );
  }

  .card:first-child:hover {
    transform-origin: left;
  }

  .card:nth-child(${prop => prop.qtdCards}):hover {
    transform-origin: right;
  }

  height: 230px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 80px;
  background: #141414;
  padding: 10px;

  opacity: 0;

  transition: opacity 0.6s ease-in-out;
  transition-delay: 0s;
`;

interface ContainerProps {
  bgImage: string;
  isActive?: boolean;
}

export const Container = styled.div.attrs({
  className: 'card',
})<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 150px;
  z-index: 1;

  background: #141414;
  background: url(${prop => prop.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  transition: all 0.2s ease-in;
  transition-delay: 0.3s;

  ${prop =>
    prop.isActive &&
    css`
      transform: scale(1.5);
      transition-delay: 0.6s;
      height: 220px;
      z-index: 3;

      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);

      ${Content} {
        opacity: 1;
      }
    `}

  &:hover {
    transform: scale(1.5);
    transition-delay: 0.6s;
    height: 220px;
    z-index: 4;

    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);

    ${Content} {
      opacity: 1;

      transition: opacity 0.3s ease-in-out;
      transition-delay: 0.7s;
    }
  }

  & + .card {
    margin-left: 4px;
  }
`;

export const Actions = styled.ul`
  list-style: none;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
`;

interface ActionItemProps {
  isActive?: boolean;
}

export const ActionItem = styled.li<ActionItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;
  padding: 8px;
  border-radius: 50%;
  overflow: hidden;

  width: 28px;
  height: 28px;

  & + li {
    margin-left: 8px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  ${prop =>
    prop.isActive &&
    css`
      background: #fff;

      & svg {
        fill: #141414;
      }

      &:hover {
        background: #dedede;
        border: 1px solid #dedede;

        & svg {
          fill: #141414;
        }
      }
    `}
`;

export const Title = styled.p`
  font-size: 12px;
`;

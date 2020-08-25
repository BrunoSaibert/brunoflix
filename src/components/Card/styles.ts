import styled, { css, keyframes } from 'styled-components';

const changeBackground = (bgImage: string) => keyframes`
  from {
    background: #141414;
  }
  to {
    background: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

interface ImageProps {
  bgImage: string;
  orientation: 'vertical' | 'horizontal';
  position: boolean;
}

export const Image = styled.div<ImageProps>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;

  overflow: hidden;
  background: #141414;

  transition: all 0.3s ease-in-out;
  transition-delay: 0s;

  img {
    width: 100%;
    height: ${prop => (prop.orientation === 'vertical' ? '500px' : '100%')};
    object-fit: cover;
    z-index: 3;
  }

  ${prop =>
    prop.position &&
    css`
      p {
        width: 50%;
        height: 100%;
        z-index: 2;

        font-size: 240px;
        line-height: 215px;
        transform-origin: left;
        color: black;
        transform: scale(1.2, 1);
        -webkit-text-fill-color: #000;
        -webkit-text-stroke-width: 5px;
        -webkit-text-stroke-color: #555;
        font-family: fantasy;
        font-weight: bold;
        text-align: right;
        letter-spacing: -10px;
      }

      img {
        width: 50%;
        height: auto;
      }

      img,
      p {
        opacity: 1;
        transition: opacity 0.3s ease-in-out 0.1s;
      }

      &:hover {
        animation: ${changeBackground(prop.bgImage)} 2s ease-in-out forwards;
        transition-delay: 0.3s;

        img,
        p {
          opacity: 0;
          transition: opacity 0.3s ease-in-out 1s;
        }
      }
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 80px;
  padding: 10px;
  position: absolute;
  background: #141414;

  opacity: 0;
  bottom: 0;
  z-index: 1;

  transition: all 0.3s ease-in-out;
  transition-delay: 0.3s;
`;

interface ContainerProps {
  orientation: 'vertical' | 'horizontal';
}

export const Container = styled.div.attrs({
  className: 'card',
})<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  cursor: pointer;
  width: 100%;
  z-index: 1;

  position: relative;

  transition: all 0.2s ease-in;
  transition-delay: 0.2s;

  &:hover {
    transform: scale(
      ${prop => (prop.orientation === 'vertical' ? '1.15' : '1.5')}
    );
    transition-delay: 0.6s;
    z-index: 100;

    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);

    ${Content} {
      opacity: 1;
      bottom: -80px;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
      transition: opacity 0.3s ease-in-out 0.6s;
    }

    ${Image} {
      border-radius: 4px 4px 0 0;
      transition: box-shadow 0.3s ease-in-out, border-radius 0.3s ease-in-out;
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

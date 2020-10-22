import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  background: transparent;
  border: none;
  margin-bottom: 7px;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  border-top: 8px solid white;
`;

export const Modal = styled.ul`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;

  background: rgba(0, 0, 0, 0.5);
  border: 1px solid gray;
`;

interface ItemProps {
  border?: boolean;
  middle?: boolean;
  top?: boolean;
  down?: boolean;
}

export const Item = styled.li<ItemProps>`
  display: flex;
  padding: 10px;

  ${prop =>
    prop.border &&
    css`
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
    `}

    ${prop =>
      prop.top &&
      css`
        padding-top: 20px;
        padding-left: 10px;
      `}

      ${prop =>
        prop.middle &&
        css`
          padding: 5px 10px;
        `}

    ${prop =>
      prop.down &&
      css`
        padding-bottom: 20px;
        padding-left: 10px;
      `}

    :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Link = styled.a`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: center;
`;

interface ThumbnailProps {
  width: string;
  height: string;
  margin?: string;
}

export const Thumbnail = styled.img<ThumbnailProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: ${props => props.margin}px;
  border-radius: 4px;
`;

interface TitleProps {
  highlight?: boolean;
}

export const Title = styled.p<TitleProps>`
  font-size: 16px;
  color: ${props => (props.highlight ? 'white' : '#e2dddd')};
  font-weight: bold;
  text-align: left;
`;

export const BottomMenu = styled.div`
  padding: 10px 0;
`;

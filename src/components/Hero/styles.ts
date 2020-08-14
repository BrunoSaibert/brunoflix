import styled, { css } from 'styled-components';

interface ContainerProps {
  bgImage: string;
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 100vh;
  background: #141414;
  background: url(${prop => prop.bgImage});
  background: linear-gradient(transparent 80vh, #141414),
    url(${prop => prop.bgImage}) no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  margin-bottom: -100px;
`;

export const Content = styled.div`
  width: 40%;
  height: 100vh;
  padding: 0 4%;
  background: linear-gradient(90deg, #141414 30%, transparent 100%);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 16px;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 8px;
`;

interface InfoProps {
  badge?: boolean;
}

export const Info = styled.li<InfoProps>`
  margin: 4px;

  ${prop =>
    prop.badge &&
    css`
      background: #d7262d;
      padding: 4px;
      border-radius: 4px;
    `}
`;

export const Synopse = styled.p`
  color: #e5e5e5;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 16px;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

interface ButtonProps {
  variant?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 40px;
  padding: 0 30px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  background: #fff;
  color: #141414;

  ${prop =>
    prop.variant === 'secundary' &&
    css`
      background: rgba(109, 109, 110, 0.7);
      color: #fff;
    `}

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;

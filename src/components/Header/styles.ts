import styled, { css } from 'styled-components';

interface ContainerProps {
  isScrolled: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99;
  padding: 0 4%;
  height: 70px;
  margin: 0 auto;
  font-size: 14px;
  transition: all 0.4s ease-in-out;

  background: linear-gradient(rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0));

  ${prop =>
    prop.isScrolled &&
    css`
      background: #141414;
    `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 25px;
  margin-right: 25px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavLink = styled.li`
  margin-left: 20px;

  a {
    text-decoration: none;
    cursor: pointer;
    transition: color 400ms;
    color: #e5e5e5;

    &:hover {
      color: #b3b3b3;
    }

    &.active {
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 22px;
  }

  svg {
    color: #fff;
    font-size: 20px;
  }
`;

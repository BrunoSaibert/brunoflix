import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 64px auto 24px;
  padding: 0 4%;
  color: grey;

  ul {
    list-style: none;
    font-size: 14px;
  }

  button {
    border: 1px solid grey;
    color: grey;
    background: transparent;
    padding: 8px;
  }
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  li {
    margin-right: 24px;

    svg {
      font-size: 30px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;

  ul {
    padding-right: 30px;

    li {
      margin-bottom: 16px;
    }
  }
`;

export const Copy = styled.p`
  margin-top: 16px;
  font-size: 12px;
`;

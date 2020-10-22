import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  background: transparent;
  border: none;
`;

export const Wrapper = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0.75);
  border: solid 1px rgba(255, 255, 255, 0.85);

  transform: scaleX(0);
  opacity: 0;
  transition: opacity 0.25s, transform 0.25s;
  transform-origin: right 0;

  &.show {
    display: flex;
    align-items: center;
    transform: scaleX(1);
    opacity: 1;

    > svg {
      margin: 5px;
    }
  }
`;

export const Input = styled.input`
  border: none;
  color: #ccc;
  background: transparent;

  ::placeholder {
    color: #ccc;
  }
`;

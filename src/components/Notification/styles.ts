import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: relative;
  background: transparent;
  border: none;
`;

export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 1px 5px;
  border-radius: 50%;
  background-color: red;
  color: white;
`;

export const Modal = styled.ul`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 25px;
  right: 0;
  width: 400px;

  background: rgba(0, 0, 0, 0.5);
  border: 1px solid gray;
`;

export const Item = styled.li`
  display: flex;
  border-bottom: 1px solid gray;

  :last-child {
    border: none;
  }

  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
`;

export const Thumbnail = styled.img`
  width: 120px;
  height: 60px;
  margin: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #ccc;
  font-weight: bold;
  text-align: left;
`;

export const Days = styled.p`
  font-size: 10px;
  color: #999;
  font-weight: bold;
  padding-top: 5px;
`;

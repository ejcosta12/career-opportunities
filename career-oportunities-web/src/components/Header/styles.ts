import styled from 'styled-components';

export const Container = styled.header`
  height: 8vh;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  place-content: center;

  @media screen and (max-width: 768px) {
    height: 10vh;
  }
`;
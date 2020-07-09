import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 80px;
  border: none;
  height: 50px;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

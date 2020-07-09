import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 92vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

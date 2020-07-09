import styled from 'styled-components';

export const Container = styled.header`
  height: 8vh;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  div {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 20px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 15pt;
  }

  @media screen and (max-width: 768px) {

  }
`;
import styled from 'styled-components';

export const Container = styled.header`
  height: 8vh;
  background: #000000;
  color: #fffb8d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  div, a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  p {
    margin-left: 20px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 15pt;
  }

  @media screen and (max-width: 768px) {

  }
`;

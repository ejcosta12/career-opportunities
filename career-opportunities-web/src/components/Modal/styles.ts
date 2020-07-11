import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.6);
  width: 100vw;
  height: 100vh;
  display: flex;
  place-content: center;

  > div {
    margin-top: 60px;
    background: #ffffff;
    width: 500px;
    height: 350px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      margin-right: 10px;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

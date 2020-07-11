import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    button {
      margin-top: 10px;
      background: #0072ff;
      color: #ffffff;
    }
  @media screen and (max-width: 768px) {
    
  }
`;
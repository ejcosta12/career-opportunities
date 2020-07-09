import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 80%;
      height: 40px;
      border: none;
      border-bottom: 1pt solid #686e78;
      margin-bottom: 20px;
    }
    label {
      width: 80%;
      text-align: left;
      color: blue;
    }
    button {
      margin-top: 10px;
      background: blue;
      color: #ffffff;
    }
  @media screen and (max-width: 768px) {
  }
`;
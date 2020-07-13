import styled from 'styled-components';

export const Container = styled.div`
`;

export const Area1Container = styled.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  background: #ffffff;
  div {
    width: 100%;
    h4 {
      margin-bottom: 40px;
      color: #ef4d00;
    }
    * {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    overflow: visible;
    margin-top: 20px;
    padding: 10px;
  }
`;
export const Area2Container = styled.div`
  flex: 1;
`;

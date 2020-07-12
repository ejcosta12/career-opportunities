import styled from 'styled-components';

export const Container = styled.div`
  .area1 {
    flex: 1;
    padding: 50px;
    overflow-y: auto;
    background: #ffffff;
    div {
      width: 100%;
      h4 {
        margin-bottom: 40px;
        color: blue;
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
  }
  .area2 {
    flex: 1;
  }
`;

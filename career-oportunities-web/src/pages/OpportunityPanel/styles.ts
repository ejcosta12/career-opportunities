import styled from 'styled-components';

export const Container = styled.div`

.area1 {
  background: blue;
  flex: 1;
  display: flex;
  align-items: center;
  div {
    color: #ffffff;
    margin-left: 20%;
    margin-right: 5%;
    h4 {
      color: #288cec;
      font-weight: normal;
      font-size: 20px;
      margin-bottom: 5px;
    }
    h1 {
      font-weight: normal;
      font-size: 50px;
      margin-bottom: 25px;
    }
    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    div {
      margin: 10px 0;
      h1 {
        font-size: 40px;
      }
      p {
        padding-left: 30px;
      }
    }
  }
}
.area2 {
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  div {
    width: 100%;
    margin-bottom: 50px;
    h4 {
      margin-bottom: 40px;
    }
    div {
      color: #495057;
      cursor: pointer;
      background: #ffffff;
      width: 100%;
      height: 60px;
      display: flex;
      padding: 10px;
      margin-bottom: 10px;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px) {
    overflow: visible;
    margin-top: 20px;
    padding: 10px;
  }
}
`;
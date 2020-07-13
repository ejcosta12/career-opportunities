import styled, { css } from 'styled-components';

interface Props {
  valueLabel: string;
}

export const Container = styled.div<Props>`

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 2pt solid #686e78;
    margin-bottom: 20px;
    color: #ef4d00;
  }
  span {
    width: 100%;
    text-align: left;
    color: #ef4d00;
  }

${({ valueLabel }) => !!valueLabel && css`
    input {
      border-color: #ef4d00;
      border-width: 3pt;
    }
`}

  @media screen and (max-width: 768px) {

  }
`;

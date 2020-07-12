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
    color: #0072ff;
  }
  span {
    width: 100%;
    text-align: left;
    color: #0072ff;
  }

${({ valueLabel }) => !!valueLabel && css`
    input {
      border-color: #0072ff;
      border-width: 3pt;
    }
`}

  @media screen and (max-width: 768px) {

  }
`;

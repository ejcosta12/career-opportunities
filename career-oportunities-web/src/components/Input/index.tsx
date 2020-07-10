import React, {AreaHTMLAttributes} from 'react';

import { Container } from './styles';

type InputProps = AreaHTMLAttributes<HTMLDivElement>;

const Input: React.FC<InputProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <label>{children}</label>
    <input></input>
  </Container>
);

export default Input;

import React, { FormHTMLAttributes } from 'react';

import { Container } from './styles';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> = ({ children, ...props }) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Form;

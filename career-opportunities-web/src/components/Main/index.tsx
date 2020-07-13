import React, { AreaHTMLAttributes } from 'react';

import { Container } from './styles';

type MainProps = AreaHTMLAttributes<HTMLHeadElement>;

const Main: React.FC<MainProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default Main;

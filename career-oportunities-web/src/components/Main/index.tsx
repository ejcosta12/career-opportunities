import React, {AreaHTMLAttributes} from 'react';

import { Container } from './styles';

type MainProps = AreaHTMLAttributes<HTMLHeadElement>;

const Main: React.FC<MainProps> = ({children, ...props}) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Main;

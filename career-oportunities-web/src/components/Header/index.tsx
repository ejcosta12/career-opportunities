import React, {AreaHTMLAttributes} from 'react';

import { Container } from './styles';

type HeaderProps = AreaHTMLAttributes<HTMLHeadElement>;

const Header: React.FC<HeaderProps> = ({children, ...props}) => (
  <Container {...props}>
    <h3> Maximize sua Carreira </h3>
    {children}
  </Container>
);

export default Header;

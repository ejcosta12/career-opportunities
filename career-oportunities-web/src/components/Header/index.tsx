import React, {AreaHTMLAttributes} from 'react';

import { Container } from './styles';
import ArrowLeft from '../../assets/images/arrow-left.svg';

type HeaderProps = AreaHTMLAttributes<HTMLHeadElement>;

const Header: React.FC<HeaderProps> = ({children, ...props}) => (
  <Container {...props}>
      <div>
        <img className='icon-back' src={ArrowLeft} alt="back"/>
        <button> Voltar </button>
      </div>
      <div>
        <h3> Maximize sua Carreira </h3>
      </div>
      <div/>
    {children}
  </Container>
);

export default Header;

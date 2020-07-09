import React from 'react';
import { Header, Main, Button, Modal } from '../../components/'

import { Container } from './styles';

const DetailOpportunity: React.FC = () => {

  return (
    <Container>
      <Header/>
      <Main className="main">
        <div className="area1">
          <div>
            <h4> Belo Horizonte, MG </h4>
            <h1> Engenherio(a) de Software</h1>
            <p> 30 vagas </p>
            <div>
              <h2> Quem Somos </h2>
            </div>
          </div>
        </div>
        <div className="area2">
        </div>
      </Main>
    </Container>
  );
}

export default DetailOpportunity;
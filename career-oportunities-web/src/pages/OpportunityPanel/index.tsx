import React from 'react';
import { Header, Main, Button, Modal } from '../../components/'

import { Container } from './styles';

const OpportunityPanel: React.FC = () => {

  return (
    <Container>
      <Modal/>
      <Header/>
      <Main>
        <div className="area1">
          <div>
            <h4> CARREIRAS </h4>
            <h1>
              Oportunidades
            </h1>
            <p>
              Você pode se candidatar para vagas abertas ou cadastrar seu 
              currículo para futuras oportunidades.
            </p>
            <Button>
              Cadastrar Currículo
            </Button>
          </div>
        </div>
        <div className="area2">
          <div>
            <h4> Belo Horizonte </h4>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <div>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </div>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default OpportunityPanel;
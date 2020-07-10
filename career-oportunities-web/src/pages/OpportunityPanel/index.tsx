import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Header, Main, Button, Modal } from '../../components/';

import api from '../../services/api';

import { Container } from './styles';

interface Opportunitie {
  uuId: string;
  name: string;
  description: string;
  local: string;
  created_at: string;
  updated_at: string;
}

interface Params {
  tokenJWT: string;
  tokenUser: string;
}

const OpportunityPanel: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [opportunities, setOpportunities] = useState<Opportunitie[]>([]);

  useEffect(() => {
    async function loadOpportunities () {
      const response = await api.get(`/opportunities/${params.tokenJWT}`, {
        params: {
          token: params.tokenUser,
        },
      })
      const allOpportunities: Opportunitie[] = response.data;
      setOpportunities(allOpportunities);
    };

    loadOpportunities();
  }, []);


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
          { opportunities.map( opportunitie => (
            <div>
              <h4> {opportunitie.local} </h4>
              <Link key="123" to={`/details/id`} >
                <p> {opportunitie.name} </p>
                <h3> 30 Vagas </h3>
              </Link>
            </div>
          ))}
          <div>
            <h4> Belo Horizonte </h4>
            <Link key="123" to={`/details/id`} >
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </Link>
            <Link to="/">
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </Link>
            <a>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </a>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <a>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </a>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <a>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </a>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <a>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </a>
          </div>
          <div>
            <h4> Belo Horizonte </h4>
            <a>
              <p> Engenheiro de Software </p>
              <h3> 30 Vagas </h3>
            </a>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default OpportunityPanel;
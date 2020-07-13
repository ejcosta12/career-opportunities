import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  Main,
  Button,
  ModalAddVisitor,
} from '../../components';

import api from '../../services/api';

import {
  Container,
  Area1Container,
  Area2Container,
} from './styles';

interface Visitor {
  token: string;
  idVisitor: number;
}

interface Opportunity {
  uuId: string;
  name: string;
  description: string;
  quantity: number;
  local: string;
}

interface Opportunities {
  local: string;
  opportunities: Opportunity[];
}

const OpportunityPanel: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunities[]>([]);
  const [modal, setModal] = useState(false);
  const [visitor, setVisitor] = useState<Visitor>();

  useEffect(() => {
    const idVisitor = Number(localStorage.getItem('@id_visitor'));
    const token = localStorage.getItem('@token_visitor');

    if (!!idVisitor && !!token) {
      setVisitor({ idVisitor, token });
      setModal(true);
    }
  }, []);

  useEffect(() => {
    async function loadOpportunities() {
      try {
        if (visitor) {
          const response = await api.get('/opportunities/', {
            headers: {
              Authorization: `Bearer ${visitor.token}`,
            },
            params: {
              idToken: visitor.idVisitor,
            },
          });
          const allOpportunities: Opportunities[] = response.data;
          setOpportunities(allOpportunities);
        }
      } catch (error) {
        setModal(false);
      }
    }
    loadOpportunities();
  }, [visitor]);

  function isModal({ idVisitor, token }: Visitor) {
    setVisitor({ idVisitor, token });
    setModal(true);
    localStorage.setItem('@token_visitor', token);
    localStorage.setItem('@id_visitor', String(idVisitor));
  }

  return (
    <Container>
      {
        !modal && <ModalAddVisitor isModal={isModal} />
      }
      <Header />
      <Main>
        <Area1Container>
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
        </Area1Container>
        <Area2Container>
          { opportunities.map((value) => (
            <div key={value.local}>
              <h4>
                {value.local}
              </h4>
              { value.opportunities.map((opportunity) => (
                <Link to={`/details/${opportunity.uuId}`} key={opportunity.uuId}>
                  <p>
                    {opportunity.name}
                  </p>
                  <h3>
                    {opportunity.quantity > 1
                      ? `${opportunity.quantity} vagas`
                      : `${opportunity.quantity} vaga`}
                  </h3>
                </Link>
              ))}
            </div>
          ))}
        </Area2Container>
      </Main>
    </Container>
  );
};

export default OpportunityPanel;

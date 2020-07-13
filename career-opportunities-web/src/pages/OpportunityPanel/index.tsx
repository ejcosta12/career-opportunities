import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  Main,
  Button,
  ModalAddVisitor,
} from '../../components';

import api from '../../services/api';

import { Container } from './styles';

interface Visitor {
  token: string;
  idVisitor: number;
}

interface Opportunitie {
  uuId: string;
  name: string;
  description: string;
  quantity: number;
  local: string;
}

interface Opportunities {
  local: string;
  opportunities: Opportunitie[];
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
          { opportunities.map((value) => (
            <div key={value.local}>
              <h4>
                {value.local}
              </h4>
              { value.opportunities.map((opportunitie) => (
                <Link to="/details/id" key={opportunitie.uuId}>
                  <p>
                    {opportunitie.name}
                  </p>
                  <h3>
                    {opportunitie.quantity > 1
                      ? `${opportunitie.quantity} vagas`
                      : `${opportunitie.quantity} vaga`}
                  </h3>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Main>
    </Container>
  );
};

export default OpportunityPanel;

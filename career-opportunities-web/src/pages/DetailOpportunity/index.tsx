import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import {
  Header,
  Main,
} from '../../components';

import api from '../../services/api';

import {
  Container,
  Area1Container,
  Area2Container,
} from './styles';

interface UrlParams {
  id: string;
}

interface Opportunity {
  uuId: string;
  name: string;
  description: string;
  quantity: number;
  local: string;
}

const DetailOpportunity: React.FC = () => {
  const { params } = useRouteMatch<UrlParams>();
  const history = useHistory();
  const [opportunity, setOpportunity] = useState<Opportunity>();

  useEffect(() => {
    async function loadOpportunity() {
      const idVisitor = Number(localStorage.getItem('@id_visitor'));
      const token = localStorage.getItem('@token_visitor');
      try {
        const dataOpportunity = await api.get(`/opportunities/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            idToken: idVisitor,
          },
        });
        setOpportunity(dataOpportunity.data);
      } catch (error) {
        history.push('/');
      }
    }
    loadOpportunity();
  }, [params, history]);

  return (
    <Container>
      <Header />
      { opportunity && (
        <Main>
          <Area1Container>
            <div>
              <h4>{opportunity.local}</h4>
              <h1>{opportunity.name}</h1>
              <p>
                { opportunity.quantity > 1
                  ? `${opportunity.quantity} vagas`
                  : `${opportunity.quantity} vaga`}
              </p>
              <div>
                <h2> Quem Somos </h2>
                <p> Nascida em Belo Horizonte.</p>
                <h2>Descrição</h2>
                <p>{opportunity.description}</p>
              </div>
            </div>
          </Area1Container>
          <Area2Container />
        </Main>
      )}
    </Container>
  );
};

export default DetailOpportunity;

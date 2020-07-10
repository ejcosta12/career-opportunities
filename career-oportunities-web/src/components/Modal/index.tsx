import React, {useState, AreaHTMLAttributes} from 'react';

import api from '../../services/api';

import { Button, Form, Input } from '../index'

import { Container } from './styles';

type ModalProps = AreaHTMLAttributes<HTMLDivElement>;

interface Visitor {
  name: string;
  email: string;
  token: string;
  idVisitor: number;
}

const Modal: React.FC<ModalProps> = ({...props}) => {

  const [ statusForm, setStatusForm ] = useState(false);

  async function handleVisitor() {
    const response = await api.post('/sessions', {
      body: {
        name: "Ana",
	      email: "ana@hotmail.com",
      }
    });
    const visitor: Visitor = response.data;
    console.log(visitor);
    if (!!visitor) {
      window.alert(`Olá, seu token de acesso é: ${visitor.idVisitor}`)
      setStatusForm(true);
    };
  }

  async function handleToken() {
    const response = await api.post('/sessions', {
      body: {
        name: "Ana",
	      email: "ana@hotmail.com",
      }
    });
    const visitor: Visitor = response.data;
    if (!!visitor) {
      window.alert(`Olá, seu token de acesso é: ${visitor.idVisitor}`)
      setStatusForm(true);
    }
  }


  return (
    <Container {...props}>
      <div>
        <h1> Dados para acesso </h1>
        { !statusForm &&
          <Form>
            <div>
              <Input name="Nome Completo"/>
              <Input name="E-mail"/>
            </div>
            <Button onClick={() => handleVisitor()}>Continuar</Button>
          </Form>
        }
        { statusForm && 
          <Form>
            <div>
              <Input name="Token de acesso"/>
            </div>
            <Button type="submit" onClick={() => handleToken()}>Continuar</Button>
          </Form>
        }
      </div>
    </Container>
  );
};

export default Modal;

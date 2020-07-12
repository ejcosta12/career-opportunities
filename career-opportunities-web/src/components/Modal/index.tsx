import React, { useState, AreaHTMLAttributes } from 'react';

// import {  } from 'react-router-dom';

import api from '../../services/api';

import { Button, Form, Input } from '../index';

import { Container } from './styles';

interface Visitor {
  name: string;
  email: string;
  token: string;
  idVisitor: number;
}

interface IModalProps extends AreaHTMLAttributes<HTMLDivElement> {
  isModal: ({
    email,
    idVisitor,
    name,
    token,
  }:Visitor) => void;
}

const Modal: React.FC<IModalProps> = ({ isModal, ...rest }) => {
  const [statusForm, setStatusForm] = useState(false);
  const [visitor, setVisitor] = useState<Visitor>();
  const [valueInputName, setValueInputName] = useState('');
  const [valueInputEmail, setValueInputEmail] = useState('');
  const [valueInputToken, setValueInputToken] = useState('');

  async function createVisitor(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    const response = await api.post('/sessions', {
      name: valueInputName,
      email: valueInputEmail,
    });
    const visitorData = response.data as Visitor;
    setVisitor(visitorData);
    alert(`Seu Token para acesso é: ${visitorData.idVisitor}`);
    setStatusForm(true);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    try {
      if (visitor) {
        const response = await api.post(
          '/sessions/login',
          {
            name: valueInputName,
            email: valueInputEmail,
            id: valueInputToken,
          },
          {
            headers: {
              Authorization: `Bearer ${visitor.token}`,
            },
          },
        );
        if (response.status === 200) {
          isModal(visitor);
        }
      }
    } catch (error) {
      alert('O token digitado está incorreto, tente novamente ou atualize a página para gerar outro.')
    }
  }
  return (
    <Container {...rest}>
      <div>
        <h1> Dados para acesso </h1>
        { !statusForm && (
          <Form>
            <div>
              <Input
                name="Nome Completo"
                value={valueInputName}
                onChange={(e) => setValueInputName(e.target.value)}
              />
              <Input
                type="email"
                name="E-mail"
                value={valueInputEmail}
                onChange={(e) => setValueInputEmail(e.target.value)}
              />
            </div>
            <Button onClick={(e) => createVisitor(e)}>Continuar</Button>
          </Form>
        )}
        { statusForm && (
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <Input
                autoFocus={!false}
                name="Token de acesso"
                value={valueInputToken}
                onChange={(e) => setValueInputToken(e.target.value)}
              />
            </div>
            <Button type="submit"> Continuar </Button>
          </Form>
        )}
      </div>
    </Container>
  );
};

export default Modal;

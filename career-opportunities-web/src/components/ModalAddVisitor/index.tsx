import React, { useState, AreaHTMLAttributes } from 'react';

import { Form } from '@unform/web';

import api from '../../services/api';

import { Button, Input } from '../index';

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

const ModalAddVisitor: React.FC<IModalProps> = ({ isModal, ...rest }) => {
  const [statusForm, setStatusForm] = useState(false);
  const [visitor, setVisitor] = useState<Visitor>();
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');

  async function createVisitor({ name, email }: Omit<Visitor, 'idVisitor'|'token'>) {
    if (!email || !name) {
      alert('Preencha todos os campos.');
    }
    const response = await api.post('/sessions', {
      name,
      email,
    });
    const visitorData = response.data as Visitor;
    setValueName(name);
    setValueEmail(email);
    setVisitor(visitorData);
    alert(`Seu Token para acesso é: ${visitorData.idVisitor}`);
    setStatusForm(true);
  }

  async function handleSubmit({ token }: Omit<Visitor, 'idVisitor'|'email'|'name'>) {
    try {
      if (visitor) {
        const response = await api.post(
          '/sessions/login',
          {
            name: valueName,
            email: valueEmail,
            id: token,
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
      alert('O token digitado está incorreto, tente novamente ou atualize a página para gerar outro.');
    }
  }
  return (
    <Container {...rest}>
      <div>
        <h1> Dados para acesso </h1>
        { !statusForm && (
          <Form onSubmit={createVisitor}>
            <div>
              <Input
                nameLabel="Nome Completo"
                name="name"
              />
              <Input
                nameLabel="E-mail"
                type="email"
                name="email"
              />
            </div>
            <Button type="submit">Continuar</Button>
          </Form>
        )}
        { statusForm && (
          <Form onSubmit={handleSubmit} initialData={{ token: '' }}>
            <div>
              <Input
                nameLabel="Token de acesso"
                name="token"
              />
            </div>
            <Button type="submit"> Continuar </Button>
          </Form>
        )}
      </div>
    </Container>
  );
};

export default ModalAddVisitor;

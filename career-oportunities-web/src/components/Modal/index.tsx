import React, {AreaHTMLAttributes} from 'react';

import { Button, Form } from '../index'

import { Container } from './styles';

type ModalProps = AreaHTMLAttributes<HTMLDivElement>;

const Modal: React.FC<ModalProps> = ({children, ...props}) => (
  <Container {...props}>
    <div>
      <h1> Dados para acesso </h1>
      <Form>
        <label> Nome Completo </label>
        <input placeholder="Nome Completo"/>
        <label> Email </label>
        <input placeholder="E-mail"/>
        <Button>Continuar</Button>
      </Form>
    </div>
  </Container>
);

export default Modal;

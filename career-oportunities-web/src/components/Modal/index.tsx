import React, {useState, AreaHTMLAttributes} from 'react';

import { Button, Form, Input } from '../index'

import { Container } from './styles';

type ModalProps = AreaHTMLAttributes<HTMLDivElement>;

const Modal: React.FC<ModalProps> = ({...props}) => {
  const [ statusForm, setStatusForm ] = useState(false);
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
            <Button onClick={() => setStatusForm(true)}>Continuar</Button>
          </Form>
        }
        { statusForm && 
          <Form>
            <div>
              <Input name="Token de acesso"/>
            </div>
            <Button onClick={() => setStatusForm(false)}>Continuar</Button>
          </Form>
        }
      </div>
    </Container>
  );
};

export default Modal;

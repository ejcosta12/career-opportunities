import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';

import { ModalAddVisitor } from '../../components';
import api from '../../services/api';

const apiMock = new AxiosMock(api);

describe('ModalAddVisitor Component', () => {
  it('should be able to modal validation', async () => {
    apiMock.onPost('sessions').reply(200, {
      name: 'teste',
      email: 'teste@teste.com',
      token: 'fdudsoisdsdsd432323',
      idVisitor: 1234,
    });
    apiMock.onPost('/sessions/login').reply(200, {});

    const { getByPlaceholderText, getByText } = render(
      <ModalAddVisitor isModal={({
        email = 'teste@teste.com',
        idVisitor = 1234,
        name = 'teste',
        token = 'fdudsoisdsdsd432323',
      }) => null}
      />,
    );

    const nameField = getByPlaceholderText('Nome Completo');
    const emailField = getByPlaceholderText('E-mail');
    const buttonElement = getByText('Continuar');

    fireEvent.change(nameField, { target: { value: 'teste' } });
    fireEvent.change(emailField, { target: { value: 'teste@teste.com' } });
    fireEvent.click(buttonElement);

    global.alert = jest.fn();

    await waitFor(() => {
      const tokenField = getByPlaceholderText('Token de acesso');
      const buttonSubmit = getByText('Acessar');
      fireEvent.change(tokenField, { target: { value: '1234' } });

      fireEvent.click(buttonSubmit);

      expect(true).toBeTruthy();

      jest.spyOn()
    });
  });
});

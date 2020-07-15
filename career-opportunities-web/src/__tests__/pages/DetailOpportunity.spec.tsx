import React from 'react';
import { render, wait } from '@testing-library/react';
import { DetailOpportunity } from '../../pages';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useRouteMatch: () => ({
    params: jest.fn(),
  }),
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
  Link: ({ children } : { children: React.ReactNode }) => children,
}));

describe('DetailOpportunity Page', () => {
  it('it should be able to list details opportunity', async () => {
    const { getByText } = render(<DetailOpportunity />);

    await wait(() => expect(getByText('')).toBeTruthy(), { timeout: 200 });
  });
});

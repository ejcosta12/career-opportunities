import React from 'react';
import { render } from '@testing-library/react';

import { DetailOpportunity } from '../../pages';

jest.mock('react-router-dom', () => ({
  useRouteMatch: () => ({
    params: jest.fn(),
  }),
  useHistory: jest.fn(),
}));

describe('DetailOpportunity Page', () => {
  it('it should be able to list details opportunity', () => {
    const { debug } = render(<DetailOpportunity />);

    debug();
  });
});

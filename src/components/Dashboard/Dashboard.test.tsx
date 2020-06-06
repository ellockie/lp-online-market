import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('<dashboard />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Dashboard />);
    const dashboard = getByTestId('dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});
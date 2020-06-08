import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';
import { store } from '../../store/store';


describe('<dashboard />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><Dashboard /></Provider>);
    const dashboard = getByTestId('dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import TopBar from './TopBar';
import { store } from '../../store/store';

describe('<TopBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><TopBar /></Provider>);
    const topBar = getByTestId('TopBar');

    expect(topBar).toBeInTheDocument();
  });
});
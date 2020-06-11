import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';

import Login from './Login';
import { store } from '../../store/store';


describe('<Login />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><Router><Login /></Router></Provider>);
    const login = getByTestId('Login');

    expect(login).toBeInTheDocument();
  });
});

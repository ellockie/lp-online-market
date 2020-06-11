import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import '@testing-library/jest-dom/extend-expect';
import Signup from './Signup';
import { store } from '../../store/store';


describe('<Signup />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><Router><Signup /></Router></Provider>);
    const signup = getByTestId('Signup');

    expect(signup).toBeInTheDocument();
  });
});

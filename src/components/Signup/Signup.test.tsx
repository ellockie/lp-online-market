import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { HashRouter as Router } from "react-router-dom";

import '@testing-library/jest-dom/extend-expect';
import Signup from './Signup';


describe('<Signup />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Router><Signup /></Router>);
    const signup = getByTestId('Signup');

    expect(signup).toBeInTheDocument();
  });
});

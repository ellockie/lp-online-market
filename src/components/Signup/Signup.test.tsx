import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Signup from './Signup';


describe('<Signup />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Signup />);
    const signup = getByTestId('Signup');

    expect(signup).toBeInTheDocument();
  });
});
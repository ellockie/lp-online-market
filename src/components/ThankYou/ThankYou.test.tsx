import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThankYou from './ThankYou';

describe('<ThankYou />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ThankYou />);
    const thankYou = getByTestId('ThankYou');

    expect(thankYou).toBeInTheDocument();
  });
});
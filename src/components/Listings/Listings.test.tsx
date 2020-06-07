import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Listings from './Listings';

describe('<Listings />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Listings />);
    const listings = getByTestId('Listings');

    expect(listings).toBeInTheDocument();
  });
});
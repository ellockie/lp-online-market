import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListingDetails from './ListingDetails';

describe('<ListingDetails />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ListingDetails />);
    const viewListing = getByTestId('ListingDetails');

    expect(viewListing).toBeInTheDocument();
  });
});
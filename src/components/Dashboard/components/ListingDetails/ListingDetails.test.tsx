import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import ListingDetails from './ListingDetails';
import { store } from '../../../../store/store';

describe('<ListingDetails />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><ListingDetails /></Provider>);
    const viewListing = getByTestId('ListingDetails');

    expect(viewListing).toBeInTheDocument();
  });
});
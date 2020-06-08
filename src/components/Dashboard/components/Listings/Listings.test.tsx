import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { store } from '../../../../store/store';
import Listings from './Listings';

describe('<Listings />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><Listings /></Provider>);
    const listings = getByTestId('Listings');

    expect(listings).toBeInTheDocument();
  });
});
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { store } from '../../../../store/store';
import ListingsDataTable from './ListingsDataTable';

describe('<ListingsDataTable />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><ListingsDataTable /></Provider>);
    const listings = getByTestId('ListingsDataTable');

    expect(listings).toBeInTheDocument();
  });
});
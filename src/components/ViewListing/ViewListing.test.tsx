import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewListing from './ViewListing';

describe('<ViewListing />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ViewListing />);
    const viewListing = getByTestId('ViewListing');

    expect(viewListing).toBeInTheDocument();
  });
});
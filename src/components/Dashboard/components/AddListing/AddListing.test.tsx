import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddListing from './AddListing';

describe('<AddListing />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<AddListing />);
    const addListing = getByTestId('AddListing');

    expect(addListing).toBeInTheDocument();
  });
});
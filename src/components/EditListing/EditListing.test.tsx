import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditListing from './EditListing';

describe('<EditListing />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<EditListing />);
    const editListing = getByTestId('EditListing');

    expect(editListing).toBeInTheDocument();
  });
});
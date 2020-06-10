import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddListingModal from './AddListingModal';

describe('<AddListingModal />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<AddListingModal />);
    const addListing = getByTestId('AddListingModal');

    expect(addListing).toBeInTheDocument();
  });
});

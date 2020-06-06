import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FrontLayout from './FrontLayout';

describe('<FrontLayout />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<FrontLayout />);
    const frontLayout = getByTestId('FrontLayout');

    expect(frontLayout).toBeInTheDocument();
  });
});
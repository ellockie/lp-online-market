import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuBar from './MenuBar';

describe('<MenuBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MenuBar />);
    const menuBar = getByTestId('MenuBar');

    expect(menuBar).toBeInTheDocument();
  });
});
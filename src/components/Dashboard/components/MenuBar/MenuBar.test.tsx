import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import MenuBar from './MenuBar';
import { store } from '../../../../store/store';

describe('<MenuBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Provider store={store}><MenuBar /></Provider>);
    const menuBar = getByTestId('MenuBar');

    expect(menuBar).toBeInTheDocument();
  });
});
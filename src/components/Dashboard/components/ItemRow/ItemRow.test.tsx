import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ItemRow from './ItemRow';
import { Item } from '../../../../models';

describe('<ItemRow />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const item: Item = {
      id: 4,
      name: "Tesuto",
      description: "Tescription",
      price: 44,
      currency: { symbol: "JPY", rateEUR: 130 },
    }
    const { getByTestId } = render(<table><tbody><ItemRow item={item}/></tbody></table>);
    const itemRow = getByTestId('ItemRow');

    expect(itemRow).toBeInTheDocument();
  });
});
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter as Router } from "react-router-dom";

import FrontLayout from './FrontLayout';

describe('<FrontLayout />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(
        <Router>
          <FrontLayout
            header="testHeader"
            message="testMessage"
            alternativeUrl="testURL"
          />
        </Router>
    );
    const frontLayout = getByTestId('FrontLayout');

    expect(frontLayout).toBeInTheDocument();
  });
});

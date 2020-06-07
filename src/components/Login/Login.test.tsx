import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Login from './Login';


it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Login/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

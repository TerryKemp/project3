import React from 'react';
import ReactDOM from 'react-dom';
import Heir from './Heir';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heir />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Heir from './Heir';

it('renders without crashing', () => {
  const div = document.createElement('div');
<<<<<<< HEAD:src/App.test.js
  ReactDOM.render(<App />, div);
=======
  ReactDOM.render(<Heir />, div);
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> a19adfcdf24047dec10204517fc3a2cbc6aef28c:src/Heir.test.js
});

import React from 'react';
import ReactDOM from 'react-dom';
import Mirador from './core'
import ImageExtension from './extensions/images'


ReactDOM.render(
  <Mirador extensions={[ ImageExtension ]} />,
  document.getElementById('root'),
);

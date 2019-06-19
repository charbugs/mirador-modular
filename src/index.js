import React from 'react';
import ReactDOM from 'react-dom';
import Mirador from './core'
import imageExtension from './extensions/images'
import ublExtension from './extensions/ubl'


ReactDOM.render(
  <Mirador extensions={[ ublExtension, imageExtension ]} />,
  document.getElementById('root'),
);

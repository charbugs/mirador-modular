import React from 'react';
import ReactDOM from 'react-dom';
import Mirador from './core'
import imageExtension from './extensions/images'
import ublExtension from './extensions/ubl'

const container = document.createElement('div')
container.setAttribute('id', 'root')
document.body.appendChild(container)

ReactDOM.render(
  <Mirador extensions={[ ublExtension, imageExtension ]} />,
  document.getElementById('root'),
);

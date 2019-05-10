import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as iiifReducers from '../mirador/iiif/state/reducers'
import * as workspaceReducers from '../mirador/workspace/state/reducers'


export default createStore(
  combineReducers({ ...iiifReducers, ...workspaceReducers }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

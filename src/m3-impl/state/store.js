import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as iiifReducers from '../../m3/iiif/basic/state/reducers'
import * as workspaceReducers from '../../m3/layout/workspace/state/reducers'


export const store = createStore(
  combineReducers({
    ...iiifReducers,
    ...workspaceReducers,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

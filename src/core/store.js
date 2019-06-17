import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import manifests from './state/manifests'
import workspace from './state/workspace'
import windows from './state/windows'
import elastic from './state/elastic'
import mosaic from './state/mosaic'
import layouts from './state/layouts'

export const store = createStore(
  combineReducers({
    manifests, workspace, windows, elastic, mosaic, layouts,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

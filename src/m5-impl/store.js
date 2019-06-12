import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import manifests from '../m5/state/manifests'
import workspace from '../m5/state/workspace'
import windows from '../m5/state/windows'
import elastic from '../m5/state/elastic'
import mosaic from '../m5/state/mosaic'
import layouts from '../m5/state/layouts'

export const store = createStore(
  combineReducers({
    manifests, workspace, windows, elastic, mosaic, layouts,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

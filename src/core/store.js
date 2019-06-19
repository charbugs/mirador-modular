import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import manifests from './state/manifests'
import workspace from './state/workspace'
import windows from './state/windows'
import elastic from './state/elastic'
import mosaic from './state/mosaic'
import layouts from './state/layouts'

export default function (extensions) {
  const copyReducers = (acc, ext) => ({ ...acc, ...ext.getReducers() })
  const extensionReducers = extensions.reduce(copyReducers, {})
  return createStore(
    combineReducers({
      ...extensionReducers,
      manifests,
      workspace,
      windows,
      elastic,
      mosaic,
      layouts,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

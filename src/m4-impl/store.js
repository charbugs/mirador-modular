import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { manifestReducer } from '../m4/iiif/state/reducers'
import { workspaceReducer } from '../m4/workspace/state/reducers'
import { windowReducer } from '../m4/window-manager/state/reducers'
import { elasticReducer } from '../m4/window-manager/state/reducers'
import { settingsReducer } from '../m4/window-manager/state/reducers'

export const store = createStore(
  combineReducers({
    manifests: manifestReducer,
    workspace: workspaceReducer,
    windows: windowReducer,
    elastic: elasticReducer,
    windowManagerSettings: settingsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

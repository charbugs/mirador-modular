import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { manifestReducer } from '../../m3/iiif/simple-manifest-manager/state/reducers'
import { workspaceReducer } from '../../m3/workspaces/simple-workspace/state/reducers'
import { elasticReducer } from '../../m3/window-managers/elastic/state/reducers'
import { simpleViewerReducer } from '../../m3/window-contents/simple-viewer/state/reducers'

export const store = createStore(
  combineReducers({
    manifests: manifestReducer,
    workspace: workspaceReducer,
    elastic: elasticReducer,
    simpleViewer: simpleViewerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as iiifReducers from '../mirador/iiif/state/reducers'
import * as elasticReducers from '../mirador/elastic/state/reducers'
import * as workspaceReducers from '../mirador/workspace/state/reducers'
import * as contentReducers from '../mirador/content/state/reducers'


export default createStore(
  combineReducers({
    ...iiifReducers,
    ...elasticReducers,
    ...workspaceReducers,
    ...contentReducers,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as iiifReducers from '../../m3/iiif/state/reducers'
import * as gridReducers from '../../m3/grid-layout/state/reducers'
import * as freeReducers from '../../m3/free-layout/state/reducers'

export const store = createStore(
  combineReducers({
    ...iiifReducers,
    ...gridReducers,
    ...freeReducers,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

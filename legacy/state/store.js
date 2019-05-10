import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { welcomeReducer } from './reducers';

export default createStore(
  combineReducers({ welcome: welcomeReducer}),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

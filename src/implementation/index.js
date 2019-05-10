import React from 'react'
import { Provider } from 'react-redux';
import store from './store'
import App from './App'

const logState = () => console.log(store.getState())

export default function (props) {
  return (
    <Provider store={store}>
      <App />
      <button onClick={logState}>State</button>
    </Provider>
  )
}

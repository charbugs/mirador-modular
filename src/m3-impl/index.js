import React from 'react'
import { Provider } from 'react-redux';
import { store } from './state/store'
import Workspace from './workspace/Workspace'


const logState = () => console.log(store.getState())

export default function (props) {
  return (
    <Provider store={store}>
      <Workspace />
      <button onClick={logState}>State</button>
    </Provider>
  )
}

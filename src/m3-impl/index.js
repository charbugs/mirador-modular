import React from 'react'
import { Provider } from 'react-redux';
import { store } from './state/store'
import { init } from './init'
import Workspace from './controllers/Workspace'


const logState = () => console.log(store.getState())

init(store)

export default function (props) {
  return (
    <Provider store={store}>
      <Workspace layoutId="workspaceLayout"/>
      <button onClick={logState}>State</button>
    </Provider>
  )
}

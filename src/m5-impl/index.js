import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Workspace from './Workspace'

export default function (props) {
  return (
    <Provider store={store}>
      <Workspace />
      <button onClick={() => console.log(store.getState())}>State</button>
    </Provider>
  )
}

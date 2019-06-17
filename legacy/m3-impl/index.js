import React from 'react'
import { Provider } from 'react-redux'
import { store } from './state/store'
import Workspace from './controllers/Workspace'
import { OpenSeadragon } from '../m3/window-contents/simple-viewer/components/OpenSeadragon'


const logState = () => console.log(store.getState())

export default function (props) {
  return (
    <Provider store={store}>
      <Workspace />
      <button onClick={logState}>State</button>
    </Provider>
  )
}

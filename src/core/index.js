import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ExtensionProvider } from './common/providers'
import Workspace from './containers/Workspace'

export default function ({ extensions }) {
  return (
    <Provider store={store}>
      <ExtensionProvider extensions={extensions}>
        <Workspace />
        <button onClick={() => console.log(store.getState())}>State</button>
      </ExtensionProvider>
    </Provider>
  )
}

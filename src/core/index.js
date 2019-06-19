import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store'
import { initStore } from './init'
import { ExtensionProvider } from './common/providers'
import Workspace from './containers/Workspace'

export default function ({ extensions }) {
  const store = createStore(extensions)
  initStore(store)

  return (
    <Provider store={store}>
      <ExtensionProvider extensions={extensions}>
        <Workspace />
        <button onClick={() => console.log(store.getState())}>State</button>
      </ExtensionProvider>
    </Provider>
  )
}

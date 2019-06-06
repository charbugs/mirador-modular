import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import {
  ActionProvider,
  SelectorProvider,
  ComponentProvider,
  actions,
  selectors,
  components,
} from './modules'


export default function (props) {
  return (
    <Provider store={store}>
      <ActionProvider actions={actions}>
        <SelectorProvider selectors={selectors}>
          <ComponentProvider components={components}>
            <components.Workspace />
            <button onClick={() => console.log(store.getState())}>State</button>
          </ComponentProvider>
        </SelectorProvider>
      </ActionProvider>
    </Provider>
  )
}

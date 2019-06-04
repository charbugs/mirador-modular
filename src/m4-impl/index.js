import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import { ActionProvider } from '../m4/providers/actions'
import { toggleLoader } from '../m4/workspace/state/actions'
import { fetchManifest } from '../m4/iiif/state/actions'
import { openWindow } from '../m4/window-manager/state/actions'

import { SelectorProvider } from '../m4/providers/selectors'
import { isLoaderVisible } from '../m4/workspace/state/selectors'
import { getManifestLabels } from '../m4/iiif/state/selectors'
import { getWindowMode, getWindows, getElasticWindows } from '../m4/window-manager/state/selectors'

import { ComponentProvider } from '../m4/providers/components'
import { Workspace } from '../m4/workspace/containers/Workspace'
import { Loader } from '../m4/loader/containers/Loader'
import { WindowManager } from '../m4/window-manager/containers/WindowManager'

const actions = {
  toggleLoader,
  fetchManifest,
  openWindow,
}

const components = {
  Loader: Loader,
  WindowManager: WindowManager,
}

const selectors = {
  isLoaderVisible,
  getManifestLabels,
  getWindowMode,
  getWindows,
  getElasticWindows,
}

const logState = () => console.log(store.getState())

export default function (props) {
  return (
    <Provider store={store}>
      <ActionProvider actions={actions}>
        <SelectorProvider selectors={selectors}>
          <ComponentProvider components={components}>
            <Workspace />
            <button onClick={logState}>State</button>
          </ComponentProvider>
        </SelectorProvider>
      </ActionProvider>
    </Provider>
  )
}

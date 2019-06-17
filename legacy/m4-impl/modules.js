import { reducer as iiifReducer } from '../m4/iiif'
import { reducer as workspaceReducer } from '../m4/workspace'
import { reducer as windowManagerReducer } from '../m4/window-manager'
import { reducer as windowLayoutReducer }  from '../m4/window-layout'

import { actions as iiifActions } from '../m4/iiif'
import { actions as workspaceActions } from '../m4/workspace'
import { actions as loaderActions } from '../m4/loader'

import { selectors as iiifSelectors } from '../m4/iiif'
import { selectors as workspaceSelectors } from '../m4/workspace'
import { selectors as windowManagerSelectors } from '../m4/window-manager'
import { selectors as windowLayoutSelectors } from '../m4/window-layout'

import { components as workspaceComponents} from '../m4/workspace'
import { components as loaderComponents} from '../m4/loader'
import { components as windowManagerComponents} from '../m4/window-manager'
import { components as windowLayoutComponents} from '../m4/window-layout'

export const reducers = {
  iiif: iiifReducer,
  workspace: workspaceReducer,
  windowManager: windowManagerReducer,
  windowLayout: windowLayoutReducer,
}

export const actions = {
  ...iiifActions,
  ...workspaceActions,
  ...loaderActions,
}

export const selectors = {
  ...iiifSelectors,
  ...workspaceSelectors,
  ...windowManagerSelectors,
  ...windowLayoutSelectors,
}

export const components = {
  ...workspaceComponents,
  ...loaderComponents,
  ...windowManagerComponents,
  ...windowLayoutComponents,
}

export { ActionProvider, SelectorProvider, ComponentProvider } from '../m4/providers'

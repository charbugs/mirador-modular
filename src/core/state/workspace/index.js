

const initialState = {
  catalogVisible: false,
  windowMode: 'elastic'
}

export default function workspaceReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CATALOG':
      return { ...state, catalogVisible: !state.catalogVisible }
    default:
      return state
  }
}

export function toggleCatalog() {
  return { type: 'TOGGLE_CATALOG' }
}

export function isCatalogVisible(state) {
  return state.workspace.catalogVisible
}

export function getWindowMode(state) {
  return state.workspace.windowMode
}

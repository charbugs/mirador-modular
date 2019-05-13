import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'

const defaultState = {
  loaderVisible: false,
}

export function workspace(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_WORKSPACE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

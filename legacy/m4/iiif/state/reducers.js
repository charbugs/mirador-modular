import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import { combineReducers } from 'redux'
import { labeled } from './settings'

function manifests(state = {}, action) {
  switch (action.type) {
    case labeled('CREATE_MANIFEST'):
      return { ...state, [action.id]: action.payload }
    case labeled('UPDATE_MANIFEST'):
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case labeled('DELETE_MANIFEST'):
      return unset([action.id], state)
    default:
      return state
  }
}

export const reducer = combineReducers({ manifests })

import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import { labeled, defaultSettingsState } from '../settings'

export function windowReducer(state = {}, action) {
  switch (action.type) {
    case labeled('CREATE_WINDOW'):
      return { ...state, [action.id]: action.payload }
    case labeled('UPDATE_WINDOW'):
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case labeled('DELETE_WINDOW'):
      return unset([action.id], state)
    default:
      return state
  }
}

export function elasticReducer(state = {}, action) {
  switch (action.type) {
    case labeled('CREATE_ELASTIC_WINDOW'):
      return { ...state, [action.id]: action.payload }
    case labeled('UPDATE_ELASTIC_WINDOW'):
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case labeled('DELETE_ELASTIC_WINDOW'):
      return unset([action.id], state)
    default:
      return state
  }
}

export function settingsReducer(state = defaultSettingsState, action) {
  switch (action.type) {
    case labeled('UPDATE_SETTINGS'):
      return update([], data => ({ ...data, ...action.payload }), state)
    default:
      return state
  }
}

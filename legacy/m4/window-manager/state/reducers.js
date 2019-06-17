import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import uuid from 'uuid/v4'
import { combineReducers } from 'redux'
import { labeled, defaultSettingsState } from './settings'


function elasticWindows(state = {}, action) {
  switch (action.type) {
    case 'CREATE_WINDOW':
      return {
        ...state,
        [uuid()]: {
          windowId: action.payload.windowId,
          position: { x: 10, y: 10, w: 350, h: 350 },
        }
      }
    default:
      return state
  }
}

function settings(state = defaultSettingsState, action) {
  return state
}

export const reducer = combineReducers({ elasticWindows, settings })

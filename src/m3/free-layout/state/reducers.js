import set from 'lodash/fp/set'
import unset from 'lodash/fp/unset'
import update from 'lodash/fp/update'
import { labeled } from './label'

export function gridLayouts(state = {}, action) {
  const { type, payload, layoutId, itemId } = action
  switch (action.type) {

    case labeled('CREATE_LAYOUT'):
      return set([layoutId], {}, state)
    case labeled('DELETE_LAYOUT'):
      return unset([layoutId], state)

    case labeled('CREATE_LAYOUT_ITEM'):
      return set([layoutId, itemId], payload, state)
    case labeled('UPDATE_LAYOUT_ITEM'):
      return update([layoutId, itemId], data => ({ ...data, ...payload }), state)
    case labeled('DELETE_LAYOUT_ITEM'):
      return unset([layoutId, itemId], state)

    default:
      return state
  }
}

import set from 'lodash/fp/set'
import unset from 'lodash/fp/unset'
import update from 'lodash/fp/update'
import mapValues from 'lodash/fp/mapValues'

export function createLayoutReducer(label, defaultState = {}) {

  function mapValuesIf(object, check, map) {
    return mapValues(item => check(item) ? map(item) : item, object)
  }

  return function layoutReducer(state = defaultState, action) {
    const { type, payload } = action
    switch (type) {

      case `${label}_CREATE_LAYOUT`: {
        const { layoutId } = payload
        return set([layoutId], {}, state)
      }

      case `${label}_DELETE_LAYOUT`: {
        const { layoutId } = payload
        return unset([layoutId], state)
      }

      case `${label}_CREATE_LAYOUT_ITEM`: {
        const { layoutId, itemId, position, component, visible } = payload
        return set([layoutId, itemId], { itemId, position, component, visible }, state)
      }

      case `${label}_DELETE_LAYOUT_ITEM`: {
        const { layoutId, itemId } = payload
        return unset([layoutId, itemId], state)
      }

      case `${label}_MOVE_ITEM_BY_ID`: {
        const { layoutId, itemId, position } = payload
        return set([layoutId, itemId, 'position'], position, state)
      }

      case `${label}_SHOW_ITEM_BY_ID`: {
        const { layoutId, itemId } = payload
        return set([layoutId, itemId, 'visible'], true, state)
      }

      case `${label}_HIDE_ITEM_BY_ID`: {
        const { layoutId, itemId } = payload
        return set([layoutId, itemId, 'visible'], false, state)
      }

      case `${label}_TOGGLE_ITEM_BY_ID`: {
        const { layoutId, itemId } = payload
        return update([layoutId, itemId, 'visible'], val => !val, state)
      }

      case `${label}_SHOW_ITEMS_BY_NAME`: {
        const { layoutId, component } = payload
        return {
          ...state,
          [layoutId]: mapValuesIf(
            state[layoutId],
            item => item.component === component,
            item => set(['visible'], true, item),
          ),
        }
      }

      case `${label}_HIDE_ITEMS_BY_NAME`: {
        const { layoutId, component } = payload
        return {
          ...state,
          [layoutId]: mapValuesIf(
            state[layoutId],
            item => item.component === component,
            item => set(['visible'], false, item),
          ),
        }
      }

      case `${label}_TOGGLE_ITEMS_BY_NAME`: {
        const { layoutId, component } = payload
        return {
          ...state,
          [layoutId]: mapValuesIf(
            state[layoutId],
            item => item.component === component,
            item => update(['visible'], val => !val, item),
          ),
        }
      }

      default: {
        return state
      }
    }
  }
}

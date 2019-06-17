import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import uuid from 'uuid/v4'


const initialState = {}

export default function mosaicReducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'CREATE_MOSAIC_WINDOW':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_MOSAIC_WINDOW':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_MOSAIC_WINDOW':
      return unset([payload.id], state)
    default:
      return state
  }
}

export function createMosaicWindow() {
  return {
    type: 'CREATE_MOSAIC_WINDOW',
    payload: { id: uuid(), position: 'left' },
  }
}

export function deleteMosaicWindow({ mosaicId }) {
  return {
    type: 'DELETE_MOSAIC_WINDOW',
    payload: { id: mosaicId },
  }
}

import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import uuid from 'uuid/v4'


const initialState = {}

export default function elasticReducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'CREATE_ELASTIC_WINDOW':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_ELASTIC_WINDOW':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_ELASTIC_WINDOW':
      return unset([payload.id], state)
    default:
      return state
  }
}

export function createElasticWindow() {
  return {
    type: 'CREATE_ELASTIC_WINDOW',
    payload: { id: uuid(), position: { x: 10, y: 10, w: 400, h: 400 } },
  }
}

export function deleteElasticWindow({ elasticId }) {
  return {
    type: 'DELETE_ELASTIC_WINDOW',
    payload: { id: elasticId },
  }
}

export function getElasticWindows(state) {
  return state.elastic
}

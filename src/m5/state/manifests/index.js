import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import uuid from 'uuid/v4'
import fetch from 'node-fetch'


const initialState = {}

export default function manifestsReducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'CREATE_MANIFEST':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_MANIFEST':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_MANIFEST':
      return unset([payload.id], state)
    default:
      return state
  }
}

function receiveManifestJson(json) {
  return {
    type: 'CREATE_MANIFEST',
    payload: { id: uuid(), json },
  }
}

function receiveManifestError(error) {
  return {
    type: 'CREATE_MANIFEST',
    payload: { id: uuid(), error },
  }
}

export function fetchManifest(manifestId) {
  return function (dispatch) {
    return fetch(manifestId)
      .then(response => response.json())
      .then(json => dispatch(receiveManifestJson(json)))
      .catch(error => dispatch(receiveManifestError(error)))
  }
}

export function getManifestLabels(state) {
  return Object.values(state.manifests).reduce((acc, manifest) => (
    { ...acc, [manifest.id]: manifest.json.label }
  ), {})
}

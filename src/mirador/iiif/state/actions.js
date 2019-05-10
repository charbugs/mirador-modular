import uuid from 'uuid/v4'
import fetch from 'node-fetch'

export function createManifest(payload) {
  return { type: 'CREATE_MANIFEST', id: uuid(), payload }
}

export function updateManifest(id, payload) {
  return { type: 'UPDATE_MANIFEST', id, payload }
}

export function deleteManifest(id) {
  return { type: 'DELETE_MANIFEST', id }
}

export function fetchManifest(manifestId) {
  return function (dispatch, getState) {

    return fetch(manifestId)
      .then(response => response.json())
      .then(json => dispatch(createManifest({ json })))
      .catch(error => dispatch(createManifest({ error })))
  }
}

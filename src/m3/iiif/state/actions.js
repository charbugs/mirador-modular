import uuid from 'uuid/v4'
import fetch from 'node-fetch'
import { labeled } from './label'

export function createManifest(payload) {
  const id = uuid()
  return {
    type: labeled('CREATE_MANIFEST'),
    id,
    payload: {
      id,
      ...payload,
    }
  }
}

export function updateManifest(id, payload) {
  return { type: labeled('UPDATE_MANIFEST'), id, payload }
}

export function deleteManifest(id) {
  return { type: labeled('DELETE_MANIFEST'), id }
}

export function fetchManifest(manifestId) {
  return function (dispatch, getState) {
    return fetch(manifestId)
      .then(response => response.json())
      .then(json => dispatch(createManifest({ json })))
      .catch(error => dispatch(createManifest({ error })))
  }
}

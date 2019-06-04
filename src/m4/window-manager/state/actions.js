import uuid from 'uuid/v4'
import { labeled } from '../settings'

export function createWindow(payload) {
  const id = uuid()
  return { type: labeled('CREATE_WINDOW'), id, payload: { id, ...payload, } }
}

export function updateWindow(id, payload) {
  return { type: labeled('UPDATE_WINDOW'), id, payload }
}

export function deleteWindow(id) {
  return { type: labeled('DELETE_WINDOW'), id }
}

export function createElasticWindow(payload) {
  const id = uuid()
  return { type: labeled('CREATE_ELASTIC_WINDOW'), id, payload: { id, ...payload, } }
}

export function updateElasticWindow(id, payload) {
  return { type: labeled('UPDATE_ELASTIC_WINDOW'), id, payload }
}

export function deleteElasticWindow(id) {
  return { type: labeled('DELETE_ELASTIC_WINDOW'), id }
}

export function updateSettings(payload) {
  return { type: labeled('UPDATE_SETTINGS'), payload }
}

export function openWindow(manifestId) {
  return (dispatch) => {
    const windowId = dispatch(createWindow({ manifestId })).id
    const position = { x: 10, y: 10, w: 350, h: 350 }
    return dispatch(createElasticWindow({ windowId, position }))
  }
}

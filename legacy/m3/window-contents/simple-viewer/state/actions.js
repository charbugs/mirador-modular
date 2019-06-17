import uuid from 'uuid/v4'
import { labeled } from '../settings'

/**
* @param {String} manifestId
*/
export function addViewer(manifestId) {
  return {
    type: labeled('ADD_VIEWER'),
    payload: {
      id: uuid(),
      manifestId
    }
  }
}

/**
* @param {String} id
*/
export function removeViewer(id) {
  return {
    type: labeled('REMOVE_VIEWER'),
    payload: { id },
  }
}

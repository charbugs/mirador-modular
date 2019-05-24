import uuid from 'uuid/v4'
import { labeled } from '../settings'


/**
* @param {String} contentType
* @param {String} contentId
*/
export function addWindow(contentType, contentId) {
  return {
    type: labeled('ADD_WINDOW'),
    payload: {
      id: uuid(),
      position: { x: 10, y: 10, w: 350, h: 350 },
      contentType,
      contentId
    }
  }
}

/**
* @param {String} id
*/
export function removeWindow(id) {
  return {
    type: labeled('REMOVE_WINDOW'),
    payload: { id },
  }
}

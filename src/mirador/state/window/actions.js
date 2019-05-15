import uuid from 'uuid/v4'

export function createWindow(payload) {
  const id = uuid();
  return {
    type: 'CREATE_WINDOW',
    id,
    payload: {
      id,
      ...payload
    }
  }
}

export function updateWindow(id, payload) {
  return { type: 'UPDATE_WINDOW', id, payload }
}

export function deleteWindow(id) {
  console.log('in delete window')
  return { type: 'DELETE_WINDOW', id }
}

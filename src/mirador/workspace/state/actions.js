import uuid from 'uuid/v4'


export function createWindow(payload) {
  return { type: 'CREATE_WINDOW', id: uuid(), payload }
}

export function updateWindow(id, payload) {
  return { type: 'UPDATE_WINDOW', id, payload }
}

export function deleteWindow(id) {
  return { type: 'DELETE_WINDOW', id }
}

export function openWindow() {
  return createWindow({ foo: 'bar' })
}

export function closeWindow(id) {
  return deleteWindow(id)
}

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
  return { type: 'DELETE_WINDOW', id }
}

export function openWindow(contentId) {
  const payload = {
    contentId,
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 200),
    w: 400,
    h: 400,
  }
  return createWindow(payload)
}

export function closeWindow(id) {
  return deleteWindow(id)
}

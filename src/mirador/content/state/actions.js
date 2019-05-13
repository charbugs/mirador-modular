import uuid from 'uuid/v4'

export function createContent(payload) {
  const id = uuid();
  return {
    type: 'CREATE_CONTENT',
    id,
    payload: {
      id,
      ...payload
    }
  }
}

export function updateContent(id, payload) {
  return { type: 'UPDATE_CONTENT', id, payload }
}

export function deleteContent(id) {
  return { type: 'DELETE_CONTENT', id }
}

export function newContent(type) {
  return createContent({ type })
}

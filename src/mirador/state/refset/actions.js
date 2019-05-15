import uuid from 'uuid/v4'

export function createRefset(payload) {
  const id = uuid();
  return {
    type: 'CREATE_REFSET',
    id,
    payload: {
      id,
      ...payload
    }
  }
}

export function updateRefset(id, payload) {
  return { type: 'UPDATE_REFSET', id, payload }
}

export function deleteRefset(id) {
  return { type: 'DELETE_REFSET', id }
}

import uuid from 'uuid/v4'


/******************** Basic *******************/

/**
* @param {Object} payload
* @param {String} payload.component
* @param {String} payload.position
* @param {Boolean} payload.visible
* @param {String} [payload.id]
*/
export function createLayoutItem(payload) {
  payload.id = payload.id || uuid();
  return { type: 'CREATE_LAYOUT_ITEM', payload }
}

/**
* @param {String} id
* @param {Object} payload (any content)
*/
export function updateLayoutItem(id, payload) {
  payload.id = id
  return { type: 'UPDATE_LAYOUT_ITEM', payload }
}

/**
* @param {String} id
*/
export function deleteLayoutItem(id) {
  return { type: 'DELETE_LAYOUT_ITEM', payload: { id } }
}


/******************** Specific *******************/

/**
* @param {String} position
* @param {String} component
* @param {Boolean} [visible]
* @param {String} [id]
*/
export function addItem(position, component, visible = true, id) {
  return createLayoutItem({ component, position, visible, id })
}

/**
* @param {String} id
*/
export function removeItem(id) {
  return deleteLayoutItem(id)
}

/**
* @param {String} position
*/
export function clearPosition(position) {
  return function (dispatch, getState) {
    // TODO: it would be nice if the module could get the correct state slice
    // directly, rather then to quess under what name it is retrievable on the
    // global state
    const state = getState().workspaceLayout
    Object.keys(state)
      .filter(id => state[id].position === position)
      .forEach(id => dispatch(deleteLayoutItem(id)))
  }
}

/**
* @param {String} id
* @param {String} position
*/
export function moveItem(id, position) {
  return updateLayoutItem(id, { position })
}

/**
* @param {String} id
*/
export function showItem(id) {
  return updateLayoutItem(id, { visible: true })
}

/**
* @param {String} id
*/
export function hideItem(id) {
  return updateLayoutItem(id, { visible: false })
}

/**
* @param {String} id
*/
export function toggleItem(id) {
  return function (dispatch, getState) {
    const { visible } = getState().workspaceLayout[id]
    const action = visible ? hideItem : showItem
    return dispatch(action(id))
  }
}

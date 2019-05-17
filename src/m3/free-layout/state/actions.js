import uuid from 'uuid/v4'
import { labeled } from './label'

/******************** Basic *******************/

/**
* @param {String} [layoutId]
*/
export function createLayout(layoutId = uuid()) {
  return { type: labeled('CREATE_LAYOUT'), layoutId }
}

/**
* @param {String} layoutId
*/
export function deleteLayout(layoutId) {
  return { type: labeled('DELETE_LAYOUT'), layoutId }
}

/**
* @param {String} layoutId
* @param {Object} payload
* @param {String} payload.component
* @param {Boolean} payload.visible
* @param {Object} payload.position // { x, y, w, h }
*/
export function createLayoutItem(layoutId, payload) {
  const itemId = uuid()
  return {
    type: labeled('CREATE_LAYOUT_ITEM'),
    layoutId,
    itemId,
    payload: { ...payload, id: itemId }
  }
}

/**
* @param {String} layoutId
* @param {String} itemId
* @param {Object} payload
* @param {String} [payload.component]
* @param {Object} [payload.position] // { x, y, w, h }
* @param {Boolean} [payload.visible]
*/
export function updateLayoutItem(layoutId, itemId, payload) {
  return { type: labeled('UPDATE_LAYOUT_ITEM'), layoutId, itemId, payload }
}

/**
* @param {String} layoutId
* @param {String} itemId
*/
export function deleteLayoutItem(layoutId, itemId) {
  return { type: labeled('DELETE_LAYOUT_ITEM'), layoutId, itemId }
}


/******************** Specific *******************/

/**
* @param {String} layoutId
* @param {String} component
* @param {Object} [position] // { x ,y, w, h}
* @param {Boolean} [visible]
*/
export function addItem(layoutId, component, position = { x: 0, y: 0, w: 300, h: 300 }, visible = true) {
  return createLayoutItem(layoutId, { component, position, visible })
}

/**
* @param {String} layoutId
* @param {String} itemId
*/
export function removeItem(layoutId, itemId) {
  return deleteLayoutItem(layoutId, itemId)
}

/**
* @param {String} layoutId
* @param {String} position
*/
export function clearPosition(layoutId, position) {
  return function (dispatch, getState) {
    // TODO: it would be nice if the module could get the correct state slice
    // directly, rather then to quess under what name it is retrievable on the
    // global state
    const layout = getState().layouts[layoutId]
    Object.keys(layout)
      .filter(itemId => layout[itemId].position === position)
      .forEach(itemId => dispatch(deleteLayoutItem(layoutId, itemId)))
  }
}

/**
* @param {String} layoutId
* @param {String} itemId
* @param {String} position
*/
export function moveItemById(layoutId, itemId, position) {
  return updateLayoutItem(layoutId, itemId, { position })
}

/**
* @param {String} layoutId
* @param {String} itemId
*/
export function showItemById(layoutId, itemId) {
  return updateLayoutItem(layoutId, itemId, { visible: true })
}

/**
* @param {String} layoutId
* @param {String} name
*/
export function showItemsByName(layoutId, name) {
  return function (dispatch, getState) {
    const layout = getState().layouts[layoutId]
    Object.values(layout)
      .filter(item => item.component === name)
      .forEach(item => dispatch(showItemById(layoutId, item.id)))
  }
}

/**
* @param {String} layoutId
* @param {String} itemId
*/
export function hideItemById(layoutId, itemId) {
  return updateLayoutItem(layoutId, itemId, { visible: false })
}

/**
* @param {String} layoutId
* @param {String} name
*/
export function hideItemsByName(layoutId, name) {
  return function (dispatch, getState) {
    const layout = getState().layouts[layoutId]
    Object.values(layout)
      .filter(item => item.component === name)
      .forEach(item => dispatch(hideItemById(layoutId, item.id)))
  }
}

/**
* @param {String} layoutId
* @param {String} itemId
*/
export function toggleItemById(layoutId, itemId) {
  return function (dispatch, getState) {
    const { visible } = getState().layouts[layoutId][itemId]
    const action = visible ? hideItemById : showItemById
    return dispatch(action(layoutId, itemId))
  }
}

/**
* @param {String} layoutId
* @param {String} name
*/
export function toggleItemsByName(layoutId, name) {
  return function (dispatch, getState) {
    const layout = getState().layouts[layoutId]
    Object.values(layout)
      .filter(item => item.component === name)
      .forEach(item => dispatch(toggleItemById(layoutId, item.id)))
  }
}

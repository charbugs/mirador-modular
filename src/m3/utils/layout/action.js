import uuid from 'uuid/v4'


export function createLayoutActions(label) {

  /**
  * @param {String} [layoutId]
  */
  function createLayout(layoutId = uuid()) {
    return {
      type: `${label}_CREATE_LAYOUT`,
      payload: { layoutId },
    }
  }

  /**
  * @param {String} layoutId
  */
  function deleteLayout(layoutId) {
    return {
      type: `${label}_DELETE_LAYOUT`,
      payload: { layoutId },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} position
  * @param {String} component
  * @param {Boolean} visible
  */
  function createLayoutItem(layoutId, position, component, visible) {
    const itemId = uuid()
    return {
      type: `${label}_CREATE_LAYOUT_ITEM`,
      payload: { layoutId, position, component, visible, itemId },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} itemId
  */
  function deleteLayoutItem(layoutId, itemId) {
    return {
      type: `${label}_DELETE_LAYOUT_ITEM`,
      payload: { layoutId, itemId },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} itemId
  * @param {String} position
  */
  function moveItemById(layoutId, itemId, position) {
    return {
      type: `${label}_MOVE_ITEM_BY_ID`,
      payload: { layoutId, itemId, position },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} itemId
  */
  function showItemById(layoutId, itemId) {
    return {
      type: `${label}_SHOW_ITEM_BY_ID`,
      payload: { layoutId, itemId },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} component
  */
  function showItemsByName(layoutId, component) {
    return {
      type: `${label}_SHOW_ITEMS_BY_NAME`,
      payload: { layoutId, component },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} itemId
  */
  function hideItemById(layoutId, itemId) {
    return {
      type: `${label}_HIDE_ITEM_BY_ID`,
      payload: { layoutId, itemId },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} component
  */
  function hideItemsByName(layoutId, component) {
    return {
      type: `${label}_HIDE_ITEMS_BY_NAME`,
      payload: { layoutId, component }
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} itemId
  */
  function toggleItemById(layoutId, itemId) {
    return {
      type: `${label}_TOGGLE_ITEM_BY_ID`,
      payload: { layoutId, itemId },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} component
  */
  function toggleItemsByName(layoutId, component) {
    return {
      type: `${label}_TOGGLE_ITEMS_BY_NAME`,
      payload: { layoutId, component },
    }
  }

  /**
  * @param {String} layoutId
  * @param {String} position
  */
  function clearPosition(layoutId, position) {
    return {
      type: `${label}_CLEAR_POSITION`,
      payload: { layoutId, position },
    }
  }

  return {
    createLayout,
    deleteLayout,
    createLayoutItem,
    deleteLayoutItem,
    moveItemById,
    showItemById,
    hideItemById,
    toggleItemById,
    showItemsByName,
    hideItemsByName,
    toggleItemsByName,
    clearPosition,
  }
}

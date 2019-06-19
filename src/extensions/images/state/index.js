import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'


export function imageViewerReducer(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case 'CREATE_IMAGE_VIEWER':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_IMAGE_VIEWER':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_ELASTIC_WINDOW':
      return unset([payload.id], state)
    default:
      return state
  }
}

export function createImageViewer({ id, canvasCount, canvasIndex }) {
  return {
    type: 'CREATE_IMAGE_VIEWER',
    payload: { id, canvasCount, canvasIndex },
  }
}

export function updateImageViewer(id, payload) {
  return {
    type: 'UPDATE_IMAGE_VIEWER',
    payload: { id, ...payload },
  }
}

export function nextCanvas(id) {
  return function (dispatch, getState) {
    // how does an extension know where to find its state?
    // "imageExtension" is hard coded here!
    const { canvasIndex, canvasCount } = getState().imageViewers[id]
    const nextIndex = canvasIndex < canvasCount -1
      ? canvasIndex + 1
      : canvasIndex
    return dispatch(updateImageViewer(id, { canvasIndex: nextIndex } ))
  }
}

export function previousCanvas(id) {
  return function (dispatch, getState) {
    // how does an extension know where to find its state?
    // "imageExtension" is hard coded here!
    const { canvasIndex, canvasCount } = getState().imageViewers[id]
    const nextIndex = canvasIndex > 0
      ? canvasIndex - 1
      : canvasIndex
    return dispatch(updateImageViewer(id, { canvasIndex: nextIndex } ))
  }
}

export function getCanvasIndex(state, id) {
  return state.imageViewers[id].canvasIndex
}

export function getImageViewers(state) {
  return state.imageViewers
}

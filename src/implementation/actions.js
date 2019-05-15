import { createWindow } from '../mirador/state/window/actions'
import { createRefset } from '../mirador/state/refset/actions'

export function createManifestWindow(manifestId) {
  return function (dispatch, getState) {
    const refId = dispatch(createRefset({ manifests: manifestId })).id
    return dispatch(createWindow({ data: refId }))
  }
}

/* export function toggleLoader() {
  return function (dispatch, getState) {
    const visible = !(getState().workspace.loaderVisible)
    return dispatch(updateWorkspace({ loaderVisible: visible }))
  }
}

export function openWindow(layoutId) {
  const payload = {
    layoutId,
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
 */

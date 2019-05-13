
export function updateWorkspace(payload) {
  return { type: 'UPDATE_WORKSPACE', payload }
}

export function toggleLoader() {
  return function (dispatch, getState) {
    const visible = !(getState().workspace.loaderVisible)
    return dispatch(updateWorkspace({ loaderVisible: visible }))
  }
}

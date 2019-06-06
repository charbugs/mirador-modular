
export function createWindow(windowId, manifestId) {
  return { type: 'CREATE_WINDOW', payload: { windowId, manifestId }}
}

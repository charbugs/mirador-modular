import { useSelector } from 'react-redux'
import { getModuleState } from './settings'

export function getManifestIdByWindowId(windowId) {
  const layout = Object.values(useSelector(getModuleState))
    .find(layout => layout.windowId === windowId)
  return layout && layout.manifestId
}

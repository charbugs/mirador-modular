import { useSelector } from 'react-redux'
import { getModuleState } from './settings'


export function getManifestLabels() {
  const state = useSelector(state => getModuleState(state))
  return Object.values(state.manifests).reduce((acc, manifest) => (
    { ...acc, [manifest.id]: manifest.json.label }
  ), {})
}

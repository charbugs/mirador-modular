import { useSelector } from 'react-redux'
import { getModuleState } from '../settings'


export function getManifestLabels() {
  const manifests = useSelector(state => getModuleState(state))
  return Object.values(manifests).reduce((acc, manifest) => (
    { ...acc, [manifest.id]: manifest.json.label }
  ), {})
}

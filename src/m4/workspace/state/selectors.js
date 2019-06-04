import { useSelector } from 'react-redux'
import { getModuleState } from '../settings'

export function isLoaderVisible() {
  return useSelector(state => getModuleState(state).loaderVisible)
}

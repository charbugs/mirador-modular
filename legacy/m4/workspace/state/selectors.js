import { useSelector } from 'react-redux'
import { getModuleState } from './settings'

export function isLoaderVisible() {
  return useSelector(getModuleState).loaderVisible
}

import { useSelector } from 'react-redux'
import { getModuleState } from './settings'

export function getWindowMode() {
  return useSelector(getModuleState).settings.mode
}

export function getElasticWindows() {
  return useSelector(getModuleState).elasticWindows
}

import { useSelector } from 'react-redux'
import { getWindowsState, getElasticState, getSettingsState } from '../settings'

export function getWindowMode() {
  return useSelector(state => getSettingsState(state).mode)
}

export function getWindows() {
  return useSelector(state => getWindowsState(state))
}

export function getElasticWindows() {
  return useSelector(state => getElasticState(state))
}

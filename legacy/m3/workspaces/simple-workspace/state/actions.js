import { labeled } from '../settings'

export function toggleLoader() {
  return { type: labeled('TOGGLE_LOADER')}
}

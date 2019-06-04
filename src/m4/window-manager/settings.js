export const getWindowsState = state => state.windows
export const getElasticState = state => state.elastic
export const getSettingsState = state => state.windowManagerSettings

export const labeled = string => `WINDOW_MANAGER_${string}`

export const defaultSettingsState = {
  mode: 'elastic'
}

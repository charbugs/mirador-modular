export const getModuleState = state => state.windowManager

export const labeled = string => `WINDOW_MANAGER_${string}`

export const defaultSettingsState = {
  mode: 'elastic'
}

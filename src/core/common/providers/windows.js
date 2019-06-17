import React, { useContext } from 'react'

export const WindowContext = React.createContext()

export function WindowProvider({ window, children }) {
  return (
    <WindowContext.Provider value={window}>
      { children }
    </WindowContext.Provider>
  )
}

export function useWindow() {
  return useContext(WindowContext)
}

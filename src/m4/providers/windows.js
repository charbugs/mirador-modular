import React, { useContext } from 'react'

export const WindowIdContext = React.createContext()

export function useWindowId() {
  return useContext(WindowIdContext)
}

export function WindowIdProvider({ windowId, children }) {
  return (
    <WindowIdContext.Provider value={windowId}>
      { children }
    </WindowIdContext.Provider>
  )
}

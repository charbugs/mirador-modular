import React, { useContext } from 'react'

export const SelectorContext = React.createContext()

export function useSelectors() {
  return useContext(SelectorContext)
}

export function SelectorProvider({ selectors, children }) {
  return (
    <SelectorContext.Provider value={selectors}>
      { children }
    </SelectorContext.Provider>
  )
}

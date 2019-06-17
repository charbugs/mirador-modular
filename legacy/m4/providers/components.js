import React, { useContext } from 'react'

export const ComponentContext = React.createContext()

export function useComponents() {
  return useContext(ComponentContext)
}

export function ComponentProvider({ components, children }) {
  return (
    <ComponentContext.Provider value={components}>
      { children }
    </ComponentContext.Provider>
  )
}

import React, { useContext } from 'react'

export const ActionContext = React.createContext()

export function useActions() {
  return useContext(ActionContext)
}

export function ActionProvider({ actions, children }) {
  return (
    <ActionContext.Provider value={actions}>
      { children }
    </ActionContext.Provider>
  )
}

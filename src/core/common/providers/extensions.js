import React, { useContext } from 'react'

export const ExtensionContext = React.createContext()

export function ExtensionProvider({ extensions, children }) {
  return (
    <ExtensionContext.Provider value={extensions}>
      { children }
    </ExtensionContext.Provider>
  )
}

export function useExtension({ manifest, windowId }) {
  const extensions = useContext(ExtensionContext)
  const applicable = extensions.filter(ext => ext.isApplicable(manifest))[0]
  return applicable && applicable.getComponents({ manifest, windowId})
}

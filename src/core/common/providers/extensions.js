import React, { useContext } from 'react'

export const ExtensionContext = React.createContext()

export function ExtensionProvider({ extensions, children }) {
  return (
    <ExtensionContext.Provider value={extensions}>
      { children }
    </ExtensionContext.Provider>
  )
}

export function useExtension(manifest) {
  const ApplicableExtension = useContext(ExtensionContext)
    .filter(Extension => Extension.isApplicable(manifest))[0]
  return ApplicableExtension && ApplicableExtension.create(manifest)
}

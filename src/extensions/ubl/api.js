import React from 'react'

export function isApplicable(manifest) {
  return manifest['@id'].startsWith('https://iiif.ub.uni-leipzig.de')
}

export function getReducers() {
  return {}
}

export function getComponents({ manifest, windowId }) {
  return {
    side: () => <div>handled by side component of ubl extension</div>,
    main: () => <div>handled by main component of ubl extension</div>
  }
}

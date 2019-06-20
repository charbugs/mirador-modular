import React from 'react'

const style = {
  padding: '12px',
  color: '#666'
}

export function isApplicable(manifest) {
  return manifest['@id'].startsWith('https://iiif.ub.uni-leipzig.de')
}

export function getReducers() {
  return {}
}

export function getComponents({ manifest, windowId }) {
  return {
    side: () => <h3 style={style}>side component of ubl extension</h3>,
    main: () => <h3 style={style}>main component of ubl extension</h3>
  }
}

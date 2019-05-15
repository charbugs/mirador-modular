import React from 'react'
import { connect } from 'react-redux'
import { ManifestList } from '../../mirador/components/loader/ManifestList'
import { createManifestWindow } from '../actions'

function ManifestListImpl({ manifests, createManifestWindow }) {

  function manifestsToListItems() {
    return Object.values(manifests).map(manifest => ({
      id: manifest.id,
      label: manifest.json.label,
    }))
  }

  function handleItemClick(manifestId) {
    createManifestWindow(manifestId)
  }

  return <ManifestList
    items={manifestsToListItems()}
    onItemClick={handleItemClick}
  />
}

const mapStateToProps = state => ({ manifests: state.manifests })

const mapDispatchToProps = { createManifestWindow }

export default connect(mapStateToProps, mapDispatchToProps)(ManifestListImpl)

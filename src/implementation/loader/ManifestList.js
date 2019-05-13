import React from 'react'
import { connect } from 'react-redux'
import { ManifestList } from '../../mirador/loader/components/ManifestList'
import { openWindow } from '../../mirador/elastic/state/actions'
import { toggleLoader } from '../../mirador/workspace/state/actions'
import { newContent } from '../../mirador/content/state/actions'

function ManifestListImpl({ manifests, openWindow, toggleLoader, newContent }) {

  function manifestsToListItems() {
    return Object.values(manifests).map(manifest => ({
      id: manifest.json['@id'],
      label: manifest.json.label,
    }))
  }

  function handleItemClick(id) {
    const contentId = newContent('standard').id
    openWindow(contentId);
    toggleLoader();
  }

  return <ManifestList
    items={manifestsToListItems()}
    onItemClick={handleItemClick}
  />
}

const mapStateToProps = state => ({
  manifests: state.manifests
})

const mapDispatchToProps = {
  openWindow, toggleLoader, newContent
}

export default connect(mapStateToProps, mapDispatchToProps)(ManifestListImpl)

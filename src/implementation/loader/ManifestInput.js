import React from 'react'
import { connect } from 'react-redux'
import { ManifestInput} from '../../mirador/loader/components/ManifestInput'
import { fetchManifest } from '../../mirador/iiif/state/actions'

function ManifestInputImpl({ fetchManifest }) {
  return <ManifestInput onLoadClick={fetchManifest} />
}

const mapDispatchToProps = {
  fetchManifest
}

export default connect(null, mapDispatchToProps)(ManifestInputImpl)

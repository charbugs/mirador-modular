import React from 'react'
import { connect } from 'react-redux'
import { ManifestInput} from '../../mirador/components/loader/ManifestInput'
import { fetchManifest } from '../../mirador/state/iiif/actions'

function ManifestInputImpl({ fetchManifest }) {
  return <ManifestInput onLoadClick={fetchManifest} />
}

const mapDispatchToProps = { fetchManifest }

export default connect(null, mapDispatchToProps)(ManifestInputImpl)

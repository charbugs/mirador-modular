import React from 'react'
import { connect } from 'react-redux'
import { ControlPanel } from '../../mirador/workspace/components/ControlPanel'
import { toggleLoader } from '../../mirador/workspace/state/actions'

function ControlPaneImpl({ toggleLoader }) {
  return (
    <ControlPanel onLoaderClick={toggleLoader} />
  )
}

const mapDispatchToProps = {
  toggleLoader
}

export default connect(null, mapDispatchToProps)(ControlPaneImpl)

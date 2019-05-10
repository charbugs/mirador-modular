import React from 'react'
import { connect } from 'react-redux'
import { ControlPanel } from '../../mirador/workspace/components/ControlPanel'
import { openWindow } from '../../mirador/workspace/state/actions'

function ControlPaneImpl({ openWindow }) {
  return (
    <ControlPanel onOpenWindowClick={openWindow} />
  )
}

const mapDispatchToProps = {
  openWindow
}

export default connect(null, mapDispatchToProps)(ControlPaneImpl)

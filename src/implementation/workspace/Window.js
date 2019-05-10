import React from 'react'
import { connect } from 'react-redux'
import { Window } from '../../mirador/workspace/components/Window'
import { closeWindow } from '../../mirador/workspace/state/actions'

function WindowImpl({ closeWindow, windowId }) {
  return <Window onCloseClick={() => closeWindow(windowId)}/>
}

const mapDispatchToProps = {
  closeWindow
}

export default connect(null, mapDispatchToProps)(WindowImpl)

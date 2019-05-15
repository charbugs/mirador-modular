import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { TopBar } from '../../mirador/panels/components/TopBar'
import { WindowContext } from '../../mirador/elastic/contexts/WindowContext'
import { closeWindow } from '../../mirador/elastic/state/actions'

function TopBarImpl({ closeWindow }) {
  const { windowId } = useContext(WindowContext)
  return <TopBar onCloseClick={() => closeWindow(windowId)}/>
}

const mapDispatchToProps = {
  closeWindow
}

export default connect(null, mapDispatchToProps)(TopBarImpl)

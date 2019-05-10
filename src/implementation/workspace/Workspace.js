import React from 'react'
import { connect } from 'react-redux'
import { Workspace } from '../../mirador/workspace/components/Workspace'
import Window from './Window'
import ControlPanel from './ControlPanel'

function WorkspaceImpl({ windows, openWindow }) {

  function renderWindows() {
    return Object.keys(windows).map(id => <Window key={id} windowId={id} />)
  }

  return (
    <Workspace>
      <ControlPanel />
      { renderWindows() }
    </Workspace>
  )
}

const mapStateToProps = state => ({
  windows: state.windows
})

export default connect(mapStateToProps, null)(WorkspaceImpl)

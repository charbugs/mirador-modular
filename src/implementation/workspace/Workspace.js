import React from 'react'
import { connect } from 'react-redux'
import { Workspace } from '../../mirador/workspace/components/Workspace'
import ControlPanel from './ControlPanel'
import Windows from '../elastic/Windows'
import Loader from '../loader/Loader'


function WorkspaceImpl({ loaderVisible }) {
  const content = loaderVisible ? <Loader /> : <Windows />
  return (
    <Workspace
      control={<ControlPanel/>}
      content={content}
    />
  )
}

const mapStateToProps = state => ({
  loaderVisible: state.workspace.loaderVisible
})

export default connect(mapStateToProps, null)(WorkspaceImpl)

import React from 'react'
import { connect } from 'react-redux'
import { Workspace } from '../../mirador/components/workspace/Workspace'
import ControlPanel from './ControlPanel'
//import Windows from '../windows/Windows'
import Loader from '../loader/Loader'



function WorkspaceImpl(props) {
  return (
    <Workspace
      control={<ControlPanel/>}
      content={<Loader/>}
    />
  )
}

export default WorkspaceImpl

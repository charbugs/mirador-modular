import React from 'react'
import { Workspace } from '../../m3/workspaces/simple-workspace/containers/Workspace'
import Loader from './Loader'
import Windows from './Windows'


export default function WorkspaceCtrl(props) {
  return <Workspace
    loader={<Loader/>}
    windows={<Windows/>}
  />
}

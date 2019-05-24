import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getModuleState } from '../settings'
import { toggleLoader } from '../state/actions'

import { WorkspaceLayout } from '../components/WorkspaceLayout'
import { ControlPanel } from '../components/ControlPanel'


export function Workspace({ windows, loader }) {
  const { loaderVisible } = useSelector(state => getModuleState(state))
  const dispatch = useDispatch()
  const content = loaderVisible ? loader : windows

  function handleLoaderClick() {
    dispatch(toggleLoader())
  }

  return <WorkspaceLayout
    control={<ControlPanel onLoaderClick={handleLoaderClick}/>}
    content={content}
  />
}

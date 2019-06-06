import React from 'react'
import { useDispatch } from 'react-redux'

import { useActions, useSelectors, useComponents } from '../../providers'

import { WorkspaceLayout } from '../components/WorkspaceLayout'
import { ControlPanel } from '../components/ControlPanel'


export function Workspace(props) {
  const dispatch = useDispatch()
  const { toggleLoader } = useActions();
  const { Loader, WindowManager } = useComponents();
  const { isLoaderVisible } = useSelectors();
  const Content = isLoaderVisible() ? Loader : WindowManager

  function handleLoaderClick() {
    dispatch(toggleLoader())
  }

  return <WorkspaceLayout
    control={<ControlPanel onLoaderClick={handleLoaderClick}/>}
    content={<Content/>}
  />
}

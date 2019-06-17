import React from 'react'
import { WorkspaceLayout } from './WorkspaceLayout'
import { ControlPanel } from './ControlPanel'


export function Workspace({ content, onOpenCatalog }) {
  return <WorkspaceLayout
    control={<ControlPanel onOpenCatalog={onOpenCatalog}/>}
    content={content}
  />
}

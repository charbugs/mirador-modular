import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Workspace } from '../../m3/layout/workspace/components/Workspace'
import { addItem } from '../../m3/layout/workspace/state/actions'
import { getItemsByPosition } from '../../m3/layout/workspace/state/selectors'


const createControlPanel = id => <div key={id}>control panel</div>
const createWindows = id => <div key={id}>windows</div>
const createElse = id => <div key={id}>else</div>

const factories = {
  'ControlPanel': createControlPanel,
  'Windows': createWindows,
  'Else': createElse,
}

function createComponents(items = []) {
  return items.map(item => factories[item.component](item.id))
}

function initLayout(dispatch) {
  dispatch(addItem('control', 'ControlPanel'))
  dispatch(addItem('content', 'Windows'))
}

function WorkspaceImpl(props) {
  const dispatch = useDispatch()
  const { control, content } = useSelector(getItemsByPosition)
  useEffect(() => initLayout(dispatch), [])

  return <Workspace
    control={createComponents(control)}
    content={createComponents(content)}
  />
}

export default WorkspaceImpl

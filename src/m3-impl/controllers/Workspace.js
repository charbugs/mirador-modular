import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../m3/layout/workspace/state/actions'
import { getItemsByPosition } from '../../m3/layout/workspace/state/selectors'
import { Workspace } from '../../m3/layout/workspace/components/Workspace'
import ControlPanel from './ControlPanel'
import Loader from './Loader'


const createControlPanel = id => <ControlPanel key={id} />
const createLoader = id => <Loader key={id} />
const createWindows = id => <div key={id}>windows</div>

const factories = {
  'ControlPanel': createControlPanel,
  'Loader': createLoader,
  'Windows': createWindows,
}

function createComponents(items = []) {
  return items.map(item => factories[item.component](item.id))
}

function initLayout(dispatch) {
  dispatch(addItem('control', 'ControlPanel'))
  dispatch(addItem('content', 'Windows'))
  dispatch(addItem('content', 'Loader', false))
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

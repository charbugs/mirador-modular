import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LayoutContext } from '../../m3/grid-layout/state/contexts'
import { getItemsByPosition } from '../../m3/grid-layout/state/selectors'
import { Workspace } from '../../m3/workspace/Workspace'
import ControlPanel from './ControlPanel'
import Loader from './Loader'
import Elastic from './Elastic'


const createFactory = Component => (layoutId, itemId) =>
  <LayoutContext.Provider value={{ layoutId, itemId }} key={itemId}>
    <Component />
  </LayoutContext.Provider>

const factories = {
  'ControlPanel': createFactory(ControlPanel),
  'Loader': createFactory(Loader),
  'Elastic': createFactory(Elastic)
}


export default function WorkspaceCtrl({ layoutId }) {
  const { control, content } = useSelector(state =>
    getItemsByPosition(state.gridLayouts[layoutId])
  )

  function createComponents(items = []) {
    return items.map(item =>
      factories[item.component](layoutId, item.id))
  }

  return <Workspace
    control={createComponents(control)}
    content={createComponents(content)}
  />
}

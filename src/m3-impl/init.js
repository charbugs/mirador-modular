import * as grid from '../m3/grid-layout/state/actions'
import * as free from '../m3/free-layout/state/actions'

export function init(store) {
  const layoutId = 'workspaceLayout'
  store.dispatch(grid.createLayout(layoutId))
  store.dispatch(grid.addItem(layoutId, 'control', 'ControlPanel'))
  store.dispatch(grid.addItem(layoutId, 'content', 'Windows', false))
  store.dispatch(grid.addItem(layoutId, 'content', 'Loader'))

  //store.dispatch(free.createLayout('elasticLayout'))
}

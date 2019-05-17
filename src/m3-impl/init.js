import * as grid from '../m3/grid-layout/state/actions'
import * as free from '../m3/free-layout/state/actions'

export function init(store) {

  let layoutId = 'workspaceLayout'
  store.dispatch(grid.createLayout(layoutId))
  store.dispatch(grid.addItem(layoutId, 'control', 'ControlPanel'))
  store.dispatch(grid.addItem(layoutId, 'content', 'Elastic', false))
  store.dispatch(grid.addItem(layoutId, 'content', 'Loader'))

  layoutId = 'elasticLayout'
  store.dispatch(free.createLayout(layoutId))
  store.dispatch(free.addItem(layoutId, 'MyContent', { x: 50, y: 50, w: 300, h: 300 }))
  store.dispatch(free.addItem(layoutId, 'MyContent', { x: 100, y: 100, w: 300, h: 300 }))
}

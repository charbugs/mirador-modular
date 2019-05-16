import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { LayoutContext } from '../../m3/grid-layout/state/contexts'
import { toggleItemsByName } from '../../m3/grid-layout/state/actions'
import { ControlPanel } from '../../m3/workspace/ControlPanel'

export default function ControlPanelCtrl(props) {
  const dispatch = useDispatch()
  const { layoutId, itemId } = useContext(LayoutContext)

  function handleLoaderClick() {
    dispatch(toggleItemsByName(layoutId, 'Windows'))
    dispatch(toggleItemsByName(layoutId, 'Loader'))
  }

  return <ControlPanel onLoaderClick={handleLoaderClick} />
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleItemsByName } from '../../m3/layout/workspace/state/actions'
import { ControlPanel } from '../../m3/panels/ControlPanel'

function ControlPanelImpl(props) {
  const dispatch = useDispatch()
  function handleLoaderClick() {
    dispatch(toggleItemsByName('Windows'))
    dispatch(toggleItemsByName('Loader'))
  }

  return <ControlPanel onLoaderClick={handleLoaderClick} />
}

export default ControlPanelImpl

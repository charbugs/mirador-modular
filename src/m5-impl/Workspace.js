import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isCatalogVisible, toggleCatalog } from '../m5/state/workspace'
import { Workspace } from '../m5/ui/workspace'
import Catalog from './Catalog'
import Elastic from './Elastic'


export default function (props) {

  const dispatch = useDispatch()
  const catalogVisible = useSelector(isCatalogVisible)
  const content = catalogVisible ? <Catalog /> : <Elastic />

  function handleOpenCatalog() {
    dispatch(toggleCatalog())
  }

  return <Workspace
    content={content}
    onOpenCatalog={handleOpenCatalog}
  />
}

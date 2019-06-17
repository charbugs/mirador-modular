import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isCatalogVisible, toggleCatalog } from '../state/workspace'
import { Workspace } from '../components/workspace'
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

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchManifest, getManifestLabels } from '../state/manifests'
import { toggleCatalog } from '../state/workspace'
import { createWindow } from '../state/windows'
import { createElasticWindow } from '../state/elastic'
import { createWindowLayout } from '../state/layouts'
import { Catalog } from '../components/catalog'


export default function (props) {

  const dispatch = useDispatch()
  const manifestLabels = useSelector(getManifestLabels)

  function createManifestInfos() {
    return Object.keys(manifestLabels)
      .map(id => ({ id, label: manifestLabels[id] }))
  }

  function handleLoadClick(url) {
    dispatch(fetchManifest(url))
  }

  function handleManifestClick(manifestId) {
    const elasticId = dispatch(createElasticWindow()).payload.id
    const layoutId = dispatch(createWindowLayout()).payload.id
    dispatch(createWindow({ manifestId, layoutId, elasticId }))
    dispatch(toggleCatalog())
  }

  return <Catalog
    manifestInfos={createManifestInfos()}
    onManifestClick={handleManifestClick}
    onLoadClick={handleLoadClick}
  />
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchManifest, getManifestLabels } from '../m5/state/manifests'
import { toggleCatalog } from '../m5/state/workspace'
import { createWindow } from '../m5/state/windows'
import { createElasticWindow } from '../m5/state/elastic'
import { createWindowLayout } from '../m5/state/layouts'
import { Catalog } from '../m5/ui/catalog'


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

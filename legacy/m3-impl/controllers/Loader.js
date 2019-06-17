import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchManifest } from '../../m3/iiif/simple-manifest-manager/state/actions'
import { toggleLoader } from '../../m3/workspaces/simple-workspace/state/actions'
import { addWindow } from '../../m3/window-managers/elastic/state/actions'
import { addViewer } from '../../m3/window-contents/simple-viewer/state/actions'

import { Loader } from '../../m3/loaders/simple-manifest-loader/containers/Loader'


function LoaderCtrl(props) {
  const dispatch = useDispatch()
  const manifests = useSelector(state => state.manifests)

  function makeManifestInfos() {
    return Object.values(manifests).map(manifest => ({
      id: manifest.id,
      label: manifest.json.label,
    }))
  }

  function handleLoadClick(url) {
    dispatch(fetchManifest(url))
  }

  function handleManifestClick(manifestId) {
    const contentId = dispatch(addViewer(manifestId)).payload.id
    dispatch(addWindow('SimpleViewer', contentId))
    dispatch(toggleLoader())

  }

  return <Loader
    onLoadClick={handleLoadClick}
    manifestInfos={makeManifestInfos()}
    onManifestClick={handleManifestClick}
  />
}

export default LoaderCtrl

import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchManifest } from '../../m3/iiif/basic/state/actions'
import { ManifestInput } from '../../m3/panels/ManifestInput'

function ManifestListCtrl(props) {
  const dispatch = useDispatch()

  function handleLoadClick(manifestId) {
    dispatch(fetchManifest(manifestId))
  }

  return <ManifestInput onLoadClick={handleLoadClick}/>
}

export default ManifestListCtrl

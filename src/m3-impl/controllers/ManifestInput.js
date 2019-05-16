import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchManifest } from '../../m3/iiif/state/actions'
import { ManifestInput } from '../../m3/loader/ManifestInput'

function ManifestListCtrl(props) {
  const dispatch = useDispatch()

  function handleLoadClick(manifestId) {
    dispatch(fetchManifest(manifestId))
  }

  return <ManifestInput onLoadClick={handleLoadClick}/>
}

export default ManifestListCtrl

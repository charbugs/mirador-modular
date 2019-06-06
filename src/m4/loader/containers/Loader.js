import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, batch } from 'react-redux'
import uuid from 'uuid/v4'

import { useSelectors, useActions } from '../../providers'

import { LoaderLayout } from '../components/LoaderLayout'
import { ManifestInput } from '../components/ManifestInput'
import { ManifestList } from '../components/ManifestList'


export function Loader({ manifestInfos, onManifestClick, onLoadClick  }) {
  const dispatch = useDispatch()
  const { fetchManifest, createWindow, toggleLoader } = useActions()
  const { getManifestLabels } = useSelectors();

  function handleLoadClick(url) {
    dispatch(fetchManifest(url))
  }

  function handleManifestClick(manifestId) {
    batch(() => {
      dispatch(createWindow(uuid(), manifestId))
      dispatch(toggleLoader())
    })
  }

  function createManifestInfos() {
    const manifestLabels = getManifestLabels()
    return Object.keys(manifestLabels).map(id => ({ id, label: manifestLabels[id] }))
  }

  return <LoaderLayout
    input={<ManifestInput
      onLoadClick={handleLoadClick}
    />}
    list={<ManifestList
      manifestInfos={createManifestInfos()}
      onManifestClick={handleManifestClick}
    />}
  />
}

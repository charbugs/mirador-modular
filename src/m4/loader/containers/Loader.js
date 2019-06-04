import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { useSelectors } from '../../providers/selectors'
import { useActions } from '../../providers/actions'

import { LoaderLayout } from '../components/LoaderLayout'
import { ManifestInput } from '../components/ManifestInput'
import { ManifestList } from '../components/ManifestList'


export function Loader({ manifestInfos, onManifestClick, onLoadClick  }) {
  const dispatch = useDispatch()
  const { fetchManifest, openWindow } = useActions()
  const { getManifestLabels } = useSelectors();

  function handleLoadClick(url) {
    dispatch(fetchManifest(url))
  }

  function handleManifestClick(manifestId) {
    dispatch(openWindow(manifestId))
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

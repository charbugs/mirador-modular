import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleItemsByName } from '../../m3/layout/workspace/state/actions'
import { ManifestList } from '../../m3/panels/ManifestList'


function ManifestListCtrl(props) {
  const dispatch = useDispatch()
  const manifests = useSelector(state => state.manifests)

  function manifestsToListItems() {
    return Object.values(manifests).map(manifest => ({
      id: manifest.id,
      label: manifest.json.label,
    }))
  }

  function handleItemClick(manifestId) {
    dispatch(toggleItemsByName('Loader'))
    dispatch(toggleItemsByName('Windows'))
  }

  return <ManifestList
    items={manifestsToListItems()}
    onItemClick={handleItemClick}
  />
}

export default ManifestListCtrl

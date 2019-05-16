import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LayoutContext } from '../../m3/grid-layout/state/contexts'
import { toggleItemsByName } from '../../m3/grid-layout/state/actions'
import { ManifestList } from '../../m3/loader/ManifestList'


function ManifestListCtrl(props) {
  const dispatch = useDispatch()
  const manifests = useSelector(state => state.manifests)
  const { layoutId, itemId } = useContext(LayoutContext)

  function manifestsToListItems() {
    return Object.values(manifests).map(manifest => ({
      id: manifest.id,
      label: manifest.json.label,
    }))
  }

  function handleItemClick(manifestId) {
    dispatch(toggleItemsByName(layoutId, 'Loader'))
    dispatch(toggleItemsByName(layoutId, 'Windows'))
  }

  return <ManifestList
    items={manifestsToListItems()}
    onItemClick={handleItemClick}
  />
}

export default ManifestListCtrl

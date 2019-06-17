import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWindow, useExtension } from '../common/providers'
import { deleteWindow } from '../state/windows'
import { getManifestLabels, getManifestById } from '../state/manifests'
import { Layout } from '../components/layout'


export default function (props) {
  const dispatch = useDispatch()
  const { manifestId, id } = useWindow()
  const windowId = id
  const manifest = useSelector(state => getManifestById(state, manifestId))
  const title = useSelector(getManifestLabels)[manifestId]
  const extension = useExtension(manifest.json)

  if (!extension) {
    return null
  }

  const components = extension.getComponents()

  function handleClose() {
    dispatch(deleteWindow({ windowId }))
  }

  return <Layout
    title={title}
    side={<components.side />}
    main={<components.main />}
    onClose={handleClose}
  />
}

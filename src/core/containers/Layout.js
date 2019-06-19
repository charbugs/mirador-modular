import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWindow, useExtension } from '../common/providers'
import { deleteWindow } from '../state/windows'
import { getManifestLabels, getManifestById } from '../state/manifests'
import { Layout } from '../components/layout'


export default function ({ dragHandleClassName }) {
  const dispatch = useDispatch()
  const { manifestId, id: windowId } = useWindow()
  const manifest = useSelector(state => getManifestById(state, manifestId))
  const title = useSelector(getManifestLabels)[manifestId]
  const extension = useExtension({ manifest: manifest.json, windowId })

  if (!extension) {
    return <div>Could not find an extension.</div>
  }


  function handleClose() {
    dispatch(deleteWindow({ windowId }))
  }

  return <Layout
    title={title}
    side={<extension.side />}
    main={<extension.main />}
    onClose={handleClose}
    dragHandleClassName={dragHandleClassName}
  />
}

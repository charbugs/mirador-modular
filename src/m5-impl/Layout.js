import React from 'react'
import { useSelector } from 'react-redux'
import { useWindow } from './providers'
import { getManifestLabels } from '../m5/state/manifests'
import { Layout } from '../m5/ui/layout'

export default function (props) {
  const { manifestId } = useWindow()
  const title = useSelector(getManifestLabels)[manifestId]
  
  return <Layout
    title={title}
    side={<div>side</div>}
    main={<div>main</div>}
  />
}

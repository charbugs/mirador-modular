import React from 'react'

import { useSelectors, useWindowId } from '../../providers'

import { SimpleWindowLayout } from '../components/SimpleWindowLayout'
import { TopBar } from '../components/TopBar'

export function WindowLayout(props) {
  const { getManifestLabels, getManifestIdByWindowId } = useSelectors()
  const windowId = useWindowId()
  const manifestId = getManifestIdByWindowId(windowId)
  const title = getManifestLabels()[manifestId]

  return <SimpleWindowLayout
    top={<TopBar title={title} />}
    side={<div>side</div>}
    main={<div>main</div>}
  />
}

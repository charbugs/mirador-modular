import React from 'react'
import { ViewerLayout } from '../components/ViewerLayout'
import { TopBar } from '../components/TopBar'
import { OpenSeadragon } from '../components/OpenSeadragon'

export function SimpleViewer({ windowId, contentId }) {
  console.log(windowId, contentId)
  return <ViewerLayout
    top={<TopBar />}
    main={<OpenSeadragon />}
  />
}

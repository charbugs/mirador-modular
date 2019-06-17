import React from 'react'
import { Elastic } from '../../m3/window-managers/elastic/containers/Elastic'
import { SimpleViewer } from '../../m3/window-contents/simple-viewer/containers/SimpleViewer'

const contentTypeMap = { SimpleViewer }

export default function Windows(props) {
  return <Elastic contentTypeMap={contentTypeMap} />
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidePanel } from './containers/SidePanel'
import { MainPanel } from './containers/MainPanel'
import {
  imageViewerReducer,
  createImageViewer,
  getImageViewers,
} from './state'


export function getReducers() {
  return { imageViewers: imageViewerReducer }
}

export function isApplicable(manifest) {
  return manifest.sequences
    && manifest.sequences[0].canvases
    && manifest.sequences[0].canvases[0].images
    && manifest.sequences[0].canvases[0].images[0].motivation === 'sc:painting'
}

export function getComponents({ manifest, windowId }) {

  function initState() {
    const dispatch = useDispatch()
    const viewer = useSelector(getImageViewers)[windowId]
    if (!viewer) {
      dispatch(createImageViewer({
        id: windowId,
        canvasCount: manifest.sequences[0].canvases.length,
        canvasIndex: 0,
      }))

    }
  }

  function createSidePanel() {
    return <SidePanel manifest={manifest} windowId={windowId} />
  }

  function createMainPanel() {
    return <MainPanel manifest={manifest} windowId={windowId} />
  }

  initState()
  return {
    side: createSidePanel,
    main: createMainPanel,
  }
}

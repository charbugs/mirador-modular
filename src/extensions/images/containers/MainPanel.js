import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCanvasIndex, nextCanvas, previousCanvas } from '../state'
import { ImageViewer } from '../components/ImageViewer'

export function MainPanel({ manifest, windowId }) {

  function handleNextClick() {
    dispatch(nextCanvas(windowId))
  }

  function handleBackClick() {
    dispatch(previousCanvas(windowId))
  }

  const dispatch = useDispatch()
  const canvasIndex = useSelector(state => getCanvasIndex(state, windowId))
  const infoJsonUrl = manifest.sequences[0]
    .canvases[canvasIndex].images[0].resource.service['@id']

  return <ImageViewer
    infoJsonUrl={infoJsonUrl}
    onNext={handleNextClick}
    onBack={handleBackClick}
  />
}

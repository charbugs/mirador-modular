import React from 'react'
import { DescriptionPanel } from './DescriptionPanel'
import { ImageViewer } from './ImageViewer'

function isApplicable(manifest) {
  return manifest.sequences
    && manifest.sequences[0].canvases
    && manifest.sequences[0].canvases[0].images
    && manifest.sequences[0].canvases[0].images[0].motivation === 'sc:painting'
}

function create(manifest) {
  return {
    createDescriptionPanel() {
      return <DescriptionPanel description={manifest.description} />
    },
    createImageViewer() {
      const infoJsonUrl = manifest.sequences[0].canvases[0].images[0].resource.service['@id']
      return <ImageViewer infoJsonUrl={infoJsonUrl} />
    },
    getComponents() {
      return {
        side: this.createDescriptionPanel,
        main: this.createImageViewer,
      }
    },
  }
}


export const Extension = {
  isApplicable,
  create,
}

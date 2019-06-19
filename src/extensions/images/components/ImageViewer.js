import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import NextIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/styles'
import OSD from 'openseadragon'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    position: 'relative',
  },
  viewer: {
    flex: 1,
    position: 'relative',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
  }
})

export const ImageViewer = React.memo(function ImageViewer({ infoJsonUrl, onBack, onNext }) {
  const cls = useStyles()
  const [containerId] = useState(uuid())

  useEffect(() => {
    new OSD({
      id: containerId,
      showNavigationControl: false,
      showZoomControl: false,
      showHomeControl: false,
      showSequenceControl: false,
      sequenceMode:  false,
      tileSources: [ infoJsonUrl ],
    });
  }, [])

  return (
    <div className={cls.root}>
      <div id={containerId} className={cls.viewer} />
      <div className={cls.navigation}>
        <IconButton onClick={onBack}><BackIcon/></IconButton>
        <IconButton onClick={onNext}><NextIcon/></IconButton>
      </div>
    </div>
  )
})

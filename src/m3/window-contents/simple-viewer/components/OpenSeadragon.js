import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import OSD from 'openseadragon';


export class OpenSeadragon extends React.Component {

  componentDidMount() {
    new OSD({
      id: "osd",
      showNavigationControl: false,
      showZoomControl: false,
      showHomeControl: false,
      showSequenceControl: false,
      sequenceMode:  false,
      tileSources: [
        "https://iiif.ucd.ie/loris/ucdlib%3A33543/info.json",
      ]
    });
  }

  render() {
    return <div id="osd" style={{ width: '100%', height: '80%', position: 'absolute' }}/>
  }
}

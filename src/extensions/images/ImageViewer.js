import React from 'react'
import uuid from 'uuid/v4'
import OSD from 'openseadragon';


export class ImageViewer extends React.Component {

  constructor(props) {
    super(props)
    this.containerId = uuid()
  }

  componentDidMount() {
    new OSD({
      id: this.containerId,
      showNavigationControl: false,
      showZoomControl: false,
      showHomeControl: false,
      showSequenceControl: false,
      sequenceMode:  false,
      tileSources: [
        this.props.infoJsonUrl,
      ]
    });
  }

  render() {
    return <div id={this.containerId} style={{ position: 'relative', flex: 1 }} />
  }
}

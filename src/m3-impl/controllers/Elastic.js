import React from 'react'
import { useSelector } from 'react-redux'
import { Elastic } from '../../m3/elastic/components/Elastic'
import { Window } from '../../m3/elastic/components/Window'
import { ImageViewer } from '../../m3/image-viewer/components/ImageViewer'
import { TopBar } from '../../m3/image-viewer/components/TopBar'

function createWindow(item) {
  return (
    <Window key={item.id} position={item.position}>
      <ImageViewer topBar={<TopBar/>} />
    </Window>
  )

}

export default function ElasticCtrl(props) {
  console.log('elastic')
  const layout = useSelector(state => state.freeLayouts.elasticLayout)
  return(
    <Elastic>
      { Object.values(layout).map(createWindow) }
    </Elastic>
  )
}

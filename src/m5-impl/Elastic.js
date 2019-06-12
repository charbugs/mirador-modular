import React from 'react'
import { useSelector } from 'react-redux'
import { WindowProvider } from './providers'
import { getWindows } from '../m5/state/windows'
import { getElasticWindows } from '../m5/state/elastic'
import { ElasticLayout, ElasticWindow } from '../m5/ui/elastic'
import Layout from './Layout'


export default function (props) {
  const windows = useSelector(getWindows)
  const elasticWindows = useSelector(getElasticWindows)

  return (
    <ElasticLayout>
      {
        Object.values(windows).map(window => {
          const { position } = elasticWindows[window.elasticId]
          return (
            <WindowProvider window={window} key={window.id}>
              <ElasticWindow position={position}>
                <Layout />
              </ElasticWindow>
            </WindowProvider>
          )
        })
      }
    </ElasticLayout>
  )
}

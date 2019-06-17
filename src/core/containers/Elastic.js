import React from 'react'
import { useSelector } from 'react-redux'
import { WindowProvider } from '../common/providers'
import { getWindows } from '../state/windows'
import { getElasticWindows } from '../state/elastic'
import { ElasticLayout, ElasticWindow } from '../components/elastic'
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

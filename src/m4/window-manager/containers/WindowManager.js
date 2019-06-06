import React from 'react'

import { WindowIdProvider, useSelectors, useComponents } from '../../providers'

import { ElasticLayout } from '../components/ElasticLayout'
import { ElasticWindow } from '../components/ElasticWindow'

export function WindowManager(props) {
  const { getWindowMode, getElasticWindows } =  useSelectors()
  const { WindowLayout } = useComponents()

  function renderElastic() {
    return (
      <ElasticLayout>
        {
          Object.values(getElasticWindows()).map(window => {
            return (
              <ElasticWindow position={window.position} key={window.windowId}>
                <WindowIdProvider windowId={window.windowId}>
                  <WindowLayout />
                </WindowIdProvider>
              </ElasticWindow>
            )
          })
        }
      </ElasticLayout>
    )
  }

  return getWindowMode() === 'elastic'
    ? renderElastic()
    : <div>unknown window mode</div>
}

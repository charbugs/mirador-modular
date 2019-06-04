import React from 'react'

import { useSelectors } from '../../providers/selectors'

import { ElasticLayout } from '../components/ElasticLayout'
import { ElasticWindow } from '../components/ElasticWindow'

export function WindowManager(props) {
  const { getWindowMode, getWindows, getElasticWindows } =  useSelectors()

  function renderElastic() {
    const windows = getElasticWindows()
    return (
      <ElasticLayout>
        {
          Object.values(windows).map(win => (
            <ElasticWindow position={win.position}>
              <div>a window</div>
            </ElasticWindow>
          ))
        }
      </ElasticLayout>
    )
  }

  return getWindowMode() === 'elastic'
    ? renderElastic()
    : <div>unknown window mode</div>
}

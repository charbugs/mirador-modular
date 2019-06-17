import React from 'react'
import { useSelector } from 'react-redux'
import { ElasticLayout } from '../components/ElasticLayout'
import { Window } from '../components/Window'
import { getModuleState } from '../settings'

export function Elastic({ contentTypeMap }) {
  const windows = useSelector(state => getModuleState(state))

  function createWindow(window) {
    const { id, position, contentType, contentId } = window
    const Component = contentTypeMap[contentType]
    return (
      <Window position={position} key={id}>
        <Component windowId={id} contentId={contentId}/>
      </Window>
    )
  }

  return (
    <ElasticLayout>
      { Object.values(windows).map(createWindow) }
    </ElasticLayout>
  )
}

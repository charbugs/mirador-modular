import React from 'react'
import { Window } from './Window'

const point = max => Math.floor(Math.random() * max);

export function Windows({ windows, maxX, maxY }) {

  function renderWindows() {
    return Object.keys(windows).map(id =>
      <Window windowId={id} key={id} initX={point(maxX)} initY={point(maxY)} />
    )
  }

  return (
    <>
      { renderWindows() }
    </>
  )
}

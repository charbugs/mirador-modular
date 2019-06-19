import React from 'react'
import { Description } from '../components/Description'

export function SidePanel({ manifest, windowId }) {
  return <Description description={manifest.description} />
}

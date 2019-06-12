import React from 'react'
import { SimpleWindowLayout } from './SimpleWindowLayout'
import { TopBar } from './TopBar'

export function Layout({ title, side, main }) {
  return <SimpleWindowLayout
    top={<TopBar title={title} />}
    side={side}
    main={main}
  />
}

import React from 'react'
import { SimpleWindowLayout } from './SimpleWindowLayout'
import { TopBar } from './TopBar'

export function Layout({ title, side, main, onClose }) {
  return <SimpleWindowLayout
    top={<TopBar title={title} onClose={onClose} />}
    side={side}
    main={main}
  />
}

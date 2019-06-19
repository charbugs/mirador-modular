import React from 'react'
import { SimpleWindowLayout } from './SimpleWindowLayout'
import { TopBar } from './TopBar'

export const Layout = React.memo(function Layout({ title, side, main, onClose, dragHandleClassName }) {
  return <SimpleWindowLayout
    top={<TopBar title={title} onClose={onClose} dragHandleClassName={dragHandleClassName} />}
    side={side}
    main={main}
  />
})

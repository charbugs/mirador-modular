import React from 'react'
import { useFlexStyles } from '../../styles/flex'
import { useBorderStyles } from '../../styles/border'
import cn from 'classnames'

export function StandardLayout({ top, main }) {
  const cls = { ...useFlexStyles(), ...useBorderStyles() }
  return (
    <div className={cn(cls.column, cls.grow1)}>
      <div className={cn(cls.brdRight)}>
        { top }
      </div>
      <div className={cn(cls.brdRight, cls.grow1)}>
        { main }
      </div>
    </div>
  )
}

import React from 'react'
import { useFlexStyles } from '../../styles/flex'
import { useBorderStyles } from '../../styles/border'
import cn from 'classnames'

export function StandardLayout(props) {
  const cls = { ...useFlexStyles(), ...useBorderStyles() }
  return (
    <div className={cn(cls.row)}>
      <div className={cn(cls.brdRight, cls.grow1)}>
        Foo
      </div>
      <div className={cn(cls.brdRight)}>
        Bar
      </div>
    </div>
  )
}

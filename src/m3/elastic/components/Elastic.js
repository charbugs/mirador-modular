import React from 'react'
import { useFlexStyles } from '../../styles/flex'
import cn from 'classnames'

export function Elastic({ children }) {
  const cls = useFlexStyles()

  return (
    <div className={cn(cls.grow1)}>
      { children }
    </div>
  )
}

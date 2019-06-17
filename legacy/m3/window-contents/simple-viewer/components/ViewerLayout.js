import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useFlexStyles } from '../../../utils/styles/flex'
import { useBorderStyles } from '../../../utils/styles/border'
import cn from 'classnames'

export function ViewerLayout({ top, main }) {
  const cls = {
    ...useFlexStyles(),
    ...useBorderStyles(),
  }

  return (
    <div className={cn(cls.column)}>
      <div>
        { top }
      </div>
      <div className={cn(cls.grow1)}>
        { main }
      </div>
    </div>
  )
}

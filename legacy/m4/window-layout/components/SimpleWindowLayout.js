import React from 'react'
import cn from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { useFlexStyles } from '../../utils/styles/flex'
import { useBorderStyles } from '../../utils/styles/border'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
})

export function SimpleWindowLayout({ top, side, main }) {
  const cls = {
    ...useFlexStyles(),
    ...useBorderStyles(),
    ...useStyles(),
  }

  return (
    <div className={cn(cls.column, cls.root)}>
      <div className={cn(cls.brdBottom)}>
        { top }
      </div>
      <div className={cn(cls.row, cls.brdBottom, cls.grow1)}>
        <div className={cn(cls.brdRight)}>
          { side }
        </div>
        <div className={cn(cls.grow1)}>
          { main }
        </div>
      </div>
    </div>
  )
}

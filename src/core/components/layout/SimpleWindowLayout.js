import React from 'react'
import cn from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { useFlexStyles } from '../../common/styles/flex'
import { useBorderStyles } from '../../common/styles/border'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    background: 'white',
  },
  side: {
    overflowY: 'scroll',
  },
  main: {
    position: 'relative'
  }
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
        <div className={cn(cls.side, cls.brdRight)}>
          { side }
        </div>
        <div className={cn(cls.main, cls.row, cls.grow1)}>
          { main }
        </div>
      </div>
    </div>
  )
}

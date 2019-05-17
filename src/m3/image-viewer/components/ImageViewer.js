import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useFlexStyles } from '../../styles/flex'
import { useBorderStyles } from '../../styles/border'
import cn from 'classnames'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    background: '#fff'
  }
})

export function ImageViewer({ topBar, metaData, viewer}) {
  const cls = { ...useFlexStyles(), ...useBorderStyles(), ...useStyles() }

  return (
    <div className={cn(cls.column, cls.root)}>
      <div className={cn(cls.brdBottom)}>
        { topBar }
      </div>
      <div className={cn(cls.row, cls.grow1)}>
        <div className={cn(cls.brdRight)}>
          <div>metaData</div>
        </div>
        <div className={cn(cls.grow1)}>
          <div>viewer</div>
        </div>
      </div>
    </div>
  )
}

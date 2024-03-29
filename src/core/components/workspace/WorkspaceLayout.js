import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useFlexStyles } from '../../common/styles/flex'
import { useBorderStyles } from '../../common/styles/border'
import cn from 'classnames'

const useStyles = makeStyles({
  root: {
    width: '800px',
    height: '600px',
  }
})

export function WorkspaceLayout({ control, content }) {
  const cls = {
    ...useFlexStyles(),
    ...useBorderStyles(),
    ...useStyles()
  }

  return (
    <div className={cn(cls.root, cls.row, cls.brdFull)}>
      <div className={cn(cls.brdFull)}>
        { control }
      </div>
      <div className={cn(cls.grow1, cls.brdFull)}>
        { content }
      </div>

    </div>
  )
}

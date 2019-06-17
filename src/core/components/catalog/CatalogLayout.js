import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useFlexStyles } from '../../common/styles/flex'
import cn from 'classnames'

const useStyles = makeStyles({
  root: {
    padding: '8px',
  },
})

export function CatalogLayout({ input, list }) {
  const cls = { ...useStyles(), ...useFlexStyles() }
  return (
    <div className={cn(cls.root, cls.column)}>
      <div className={cn(cls.grow1)}>
        { input }
      </div>
      <div>
        { list }
      </div>
    </div>
  )
}

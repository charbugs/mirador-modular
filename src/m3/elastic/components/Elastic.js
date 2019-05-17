import React from 'react'
import { makeStyles } from '@material-ui/styles'
import cn from 'classnames'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  }
})

export function Elastic({ children }) {
  const cls = useStyles()
  return (
    <div className={cn(cls.root)}>
      { children }
    </div>
  )
}

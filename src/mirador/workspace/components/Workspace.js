import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '800px',
    height: '600px',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'row',
  }
})

export function Workspace({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      { children }
    </div>
  )
}

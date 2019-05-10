import React from 'react'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import OpenWindowIcon from '@material-ui/icons/ExposurePlus1Outlined'

const useStyles = makeStyles({
  root: {
    border: '1px solid #ddd',
  }
})

export function ControlPanel({ children, onOpenWindowClick }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <IconButton onClick={onOpenWindowClick}>
        <OpenWindowIcon />
      </IconButton>
    </div>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Rnd } from 'react-rnd'

const useStyles = makeStyles({
  root: {
    border: '1px solid #ddd',
    flexGrow: 1,
  },
  close: {
    float: 'right',
  }
})

const defaultStyle = {
  border: "solid 1px #ddd",
  background: '#fff',
  display: 'relative',
};

const defaultSize = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};

export function Window({ dragHandleClassName }) {
  const classes = useStyles()

  return (
    <Rnd
      style={defaultStyle}
      default={defaultSize}
      dragHandleClassName={dragHandleClassName}
      bounds="parent"
    >
      sdfsdf
    </Rnd>
  )
}

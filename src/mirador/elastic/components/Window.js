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
  display: 'relative',
};


export function Window({ dragHandleClassName, layout, initX, initY }) {
  const classes = useStyles()

  console.log(Math)

  const defaultSize = {
    x: initX,
    y: initY,
    width: 400,
    height: 400,
  };

  return (
    <Rnd
      style={defaultStyle}
      default={defaultSize}
      dragHandleClassName={dragHandleClassName}
      bounds="parent"
    >
      { layout }
    </Rnd>
  )
}

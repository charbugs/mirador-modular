import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Rnd } from 'react-rnd'

const defaultStyle = {
  border: "solid 1px #ddd",
  //display: 'absolute',
}

export function ElasticWindow({ position, dragHandleClassName, children }) {
  const defaultSize = {
    x: position.x,
    y: position.y,
    width: position.w,
    height: position.h
  }
  return (
    <Rnd
      style={defaultStyle}
      default={defaultSize}
      dragHandleClassName={dragHandleClassName}
      bounds="parent"
    >
      { children }
    </Rnd>
  )
}

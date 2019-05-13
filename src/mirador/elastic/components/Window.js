import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Rnd } from 'react-rnd'
import { WindowContext } from '../contexts/WindowContext'

const defaultStyle = {
  border: "solid 1px #ddd",
  display: 'flex'
}

export function Window({ position, windowId, dragHandleClassName, children }) {
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
      <WindowContext.Provider value={{ windowId }}>
        { children }
      </WindowContext.Provider>
    </Rnd>
  )
}

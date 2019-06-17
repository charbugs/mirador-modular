import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ShowLoaderIcon from '@material-ui/icons/LibraryAddOutlined'


export function ControlPanel({ onLoaderClick }) {
  return (
    <div>
      <IconButton onClick={onLoaderClick}>
        <ShowLoaderIcon />
      </IconButton>
    </div>
  )
}

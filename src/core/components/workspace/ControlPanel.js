import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ShowLoaderIcon from '@material-ui/icons/LibraryAddOutlined'


export function ControlPanel({ onOpenCatalog }) {
  return (
    <div>
      <IconButton onClick={onOpenCatalog}>
        <ShowLoaderIcon />
      </IconButton>
    </div>
  )
}

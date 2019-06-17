import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: "150px",
    padding: '8px',
  }
})

export function DescriptionPanel({ description }) {
  const cls = useStyles()
  return (
    <div className={cls.root}>
      <Typography color="inherit" variant="h6">Description</Typography>
      <Divider /><br/>
      <Typography color="inherit">{ description }</Typography>
    </div>
  )
}

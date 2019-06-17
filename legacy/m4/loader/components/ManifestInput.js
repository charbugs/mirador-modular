import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  input: {
    width: '90%',
  },
})

export function ManifestInput({ onLoadClick }) {
  const cls = useStyles();
  const [url, setUrl] = useState('')

  return (
    <>
      <TextField
        className={cls.input}
        id="manifest-input"
        label="Manifest URL"
        margin="normal"
        variant="outlined"
        value={url}
        onChange={ev => setUrl(ev.target.value)}
      />
      <br/>
      <Button
        color="primary"
        variant="contained"
        onClick={() => onLoadClick(url)}
      >Load</Button>
    </>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import cn from 'classnames';


const useStyles = makeStyles({
  toolBar: {
    display: 'flex',
  },
})

export function TopBar({ onCloseClick }) {
  const classes = useStyles()
  return (
    <div className={cn('top-bar')}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div style={{ textAlign: 'right', flexGrow: 1 }}>
            <IconButton color="inherit" aria-label="Menu" onClick={onCloseClick}>
              <CloseIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
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
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

export function TopBar({ title, onClose }) {
  const classes = useStyles()
  return (
    <div className={cn(classes.root, 'top-bar')}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography color="inherit">{title}</Typography>
          <IconButton className={classes.menuButton} onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

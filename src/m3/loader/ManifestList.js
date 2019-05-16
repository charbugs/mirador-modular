import React from 'react'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({

})

export function ManifestList({ onItemClick, items }) {
  const cls = useStyles();
  return (
    <List>
      {
        items.map(item => (
          <ListItem button onClick={() => onItemClick(item.id)} key={item.id}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))
      }
    </List>
  )
}

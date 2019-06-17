import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({

})

export function ManifestList({ onManifestClick, manifestInfos }) {
  const cls = useStyles();
  return (
    <List>
      {
        manifestInfos.map(infos => (
          <ListItem button onClick={() => onManifestClick(infos.id)} key={infos.id}>
            <ListItemText primary={infos.label} />
          </ListItem>
        ))
      }
    </List>
  )
}

ManifestList.defaultProps = {
  manifestInfos: []
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' color='default' elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' color='inherit' noWrap>
          Casvid
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header

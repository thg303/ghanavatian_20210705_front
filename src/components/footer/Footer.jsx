import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Casvid
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
        We allow you to upload videos and remove them on purpose!
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://casvid.aqlinux.ir/'>
          Cavid
        </Link>{' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </footer>
  )
}

export default Footer

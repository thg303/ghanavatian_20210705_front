import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Link as RLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}))

const Uploader = () => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <h1>another form</h1>
        <Button variant='contained' color='default' component={RLink} to='/'>
          back
        </Button>
      </Container>
    </div>
  )
}

export default Uploader

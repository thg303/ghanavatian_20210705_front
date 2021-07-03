import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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

const Upload = () => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
          Upload Video
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          We encourage you to upload a video, it would be added to our album for a while, then somebody may remove it.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary'>
                Upload
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                no other option
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Upload

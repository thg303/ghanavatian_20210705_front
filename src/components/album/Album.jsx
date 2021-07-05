import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardContent, CardMedia, Modal, Fade, Backdrop } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { loadVideosAsync, selectVideos, selectStatus } from '../../features/video/VideoSlice'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  cardFull: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const Album = () => {
  const classes = useStyles()
  const videos = useSelector(selectVideos)
  const apiStatus = useSelector(selectStatus)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const play = theVideo => {
    console.log(theVideo)
    setSelectedVideo(theVideo)
    setOpen(true)
  }

  useEffect(() => {
    dispatch(loadVideosAsync())
  }, [])

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      {apiStatus === 'idle' && videos.length === 0 &&
        <Card className={classes.cardFull}>
          <CardContent>
            <Typography variant='h5' component='h2' align='center'>Yay! you are the first one to upload a video.</Typography>
          </CardContent>
        </Card>}
      <Grid container spacing={4}>
        {videos.map((aVideo) => (
          <Grid item key={aVideo.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => play(aVideo)}>
                <CardMedia
                  className={classes.cardMedia}
                  image={process.env.REACT_APP_ASSETS_HOST + aVideo.poster.url}
                  title={aVideo.title}
                />
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {aVideo.title}
                </Typography>
                <Typography>
                  category: {aVideo.category}
                </Typography>
                <Typography>
                  type: {aVideo.clip_type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {selectedVideo &&
              <video width={320} height={240} controls>
                <source src={process.env.REACT_APP_ASSETS_HOST + selectedVideo.clip.url} type={selectedVideo.clip_type} />
                <Typography>Sorry, your browser does not support our video player.</Typography>
              </video>}
            <Button onClick={() => setOpen(false)}>close</Button>
          </div>
        </Fade>
      </Modal>
    </Container>
  )
}

export default Album

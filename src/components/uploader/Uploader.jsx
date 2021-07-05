import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import { Link as RLink, useHistory } from 'react-router-dom'
import { DropzoneArea } from 'material-ui-dropzone'

import { Backdrop, CircularProgress, Snackbar } from '@material-ui/core'

import { Alert } from '@material-ui/lab'

import { getCategories } from '../../api/categories'
import { createVideo } from '../../api/videos'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const Uploader = () => {
  const classes = useStyles()
  const [title, setTitle] = useState(null)
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState(null)
  const [poster, setPoster] = useState(null)
  const [clip, setClip] = useState(null)
  const [errors, setErrors] = useState({ title: '', categoryId: '', poster: '', clip: '' })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  useEffect(() => {
    getCategories(setCategories).catch(e => console.log({ e }))
  }, [])

  const afterSuccess = () => {
    setSuccess(false)
    history.goBack()
  }

  const updateTitle = value => {
    if (!value) { setErrors({ ...errors, title: 'Title is required' }) }
    setTitle(value)
  }
  const updateCategory = value => {
    if (!value) { setErrors({ ...errors, categoryId: 'A category should be selected' }) }
    setCategoryId(value)
  }

  const validator = () => {
    const newErrors = {}
    if (!title) { newErrors.title = 'Title is required' }
    if (!categoryId) { newErrors.categoryId = 'A category should be selected' }
    if (!poster) { newErrors.poster = 'we need a poster for your video' }
    if (!clip) { newErrors.clip = 'video is missing' }
    setErrors(newErrors)
    for (const key in newErrors) {
      if (newErrors[key] !== '') {
        return false
      }
    }
    return true
  }

  const submit = e => {
    e.preventDefault()
    // if (!validator()) {
    //   return false
    // }

    setLoading(true)

    createVideo({ title, categoryId: categoryId.value, poster, clip })
      .then(() => setSuccess(true))
      .catch(e => console.log('errr'))
      .finally(() => setLoading(false))

    return false
  }

  return (
    <div className={classes.heroContent}>

      <Container maxWidth='sm'>
        <Button variant='contained' color='default' component={RLink} to='/'>
          back
        </Button>
        <Typography component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>Upload a video</Typography>
        <form method='post' className={classes.form} noValidate onSubmit={submit}>
          <Box component='div' my={1}>
            <TextField
              variant='outlined'
              required
              onChange={e => setTitle(e.target.value)}
              fullWidth
              id='title'
              label='Video Title'
              name='title'
              autoFocus
            />
            {errors.title && <Typography color='error' mt={3}>{errors.title}</Typography>}
          </Box>
          <Box component='div' my={1}>
            <Autocomplete
              id='categoryId'
              required
              options={categories}
              getOptionLabel={(option) => option.title}
              onChange={(_, option) => setCategoryId(option)}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label='Category' variant='outlined' />}
            />
            {errors.categoryId && <Typography color='error' mt={3}>{errors.categoryId}</Typography>}
          </Box>
          <Box component='div' my={1}>
            <DropzoneArea
              acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
              filesLimit={1}
              dropzoneText='Drag and drop your 256x256 pixel image file here or click'
              onChange={loadedFiles => setPoster(loadedFiles.length > 0 ? loadedFiles.pop() : null)}
              maxFileSize={2e+8}
            />
            {errors.poster && <Typography color='error'>{errors.poster}</Typography>}
          </Box>
          <Box component='div' my={1}>
            <DropzoneArea
              acceptedFiles={['video/mp4', 'video/quicktime']}
              filesLimit={1}
              dropzoneText='Drag and drop your mp4/mov video file here or click'
              onChange={loadedFiles => setClip(loadedFiles.length > 0 ? loadedFiles.pop() : null)}
              maxFileSize={2e+8}
            />
            {errors.clip && <Typography color='error'>{errors.clip}</Typography>}
          </Box>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Create Video
          </Button>
        </form>

        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>

        <Snackbar open={success} autoHideDuration={3000} onClose={afterSuccess}>
          <Alert elevation={6} variant='filled' onClose={afterSuccess} severity='success'>
            Video successfully added!
          </Alert>
        </Snackbar>

      </Container>
    </div>
  )
}

export default Uploader

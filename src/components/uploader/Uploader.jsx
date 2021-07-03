import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import { Link as RLink } from 'react-router-dom'

import { getCategories } from '../../api/categories'

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
  }
}))

const Uploader = () => {
  const classes = useStyles()
  const [title, setTitle] = useState(null)
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState(null)
  const [poster, setPoster] = useState(null)
  const [clip, setClip] = useState(null)

  useEffect(() => {
    getCategories(setCategories).catch(e => console.log({ e }))
  }, [])

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>Upload a video</Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            onChange={(_, value) => setTitle(value)}
            fullWidth
            id='title'
            label='Video Title'
            name='title'
            autoFocus
          />
          <Autocomplete
            id='category_id'
            required
            options={categories}
            getOptionLabel={(option) => option.title}
            onChange={(_, value) => setCategoryId(value.id)}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='Category' variant='outlined' />}
          />
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

        <Button variant='contained' color='default' component={RLink} to='/'>
          back
        </Button>
      </Container>
    </div>
  )
}

export default Uploader

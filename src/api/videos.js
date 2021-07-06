import axios from 'axios'

export const createVideo = async (data) => {
  const { title, categoryId, clip } = data

  const form = new FormData()
  form.append('video[title]', title)
  form.append('video[category_id]', categoryId)
  form.append('video[clip]', clip)

  const result = await axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/videos`,
    data: form,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return result.data
}

export const getVideos = async () => {
  const result = await axios(`${process.env.REACT_APP_API_URL}/videos`)
  return result.data
}

import axios from 'axios'


export const createVideo = async (data) => {
  const {title, categoryId, poster, clip} = data

  let form = new FormData()
  form.append('video[title]', title)
  form.append('video[category_id]', categoryId)
  form.append('video[poster]', poster)
  form.append('video[clip]', clip)

  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/videos`,
      data: form,
      headers: {'Content-Type': 'multipart/form-data'}
    })
    console.log('result:', result)
  } catch (e) {
    console.log({e})
  }
}

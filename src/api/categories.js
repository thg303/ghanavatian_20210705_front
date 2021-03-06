import axios from 'axios'

export const getCategories = async (setData) => {
  const result = await axios(`${process.env.REACT_APP_API_URL}/categories`)
  setData(result.data.map(item => ({ title: item.name, value: item.id })))
}

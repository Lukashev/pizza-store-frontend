import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL

export async function getProductList() {
  try {
    const result = await axios.get(`${apiUrl}/api/products`)
    return result.data
  } catch (e) {
    throw new Error(e.message)
  }
}

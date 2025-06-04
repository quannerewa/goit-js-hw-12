import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = `50666263-41be0f694eb808efe4a214ed6`
export async function getApiImg(searchQuery, page = 1) {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return data;
}
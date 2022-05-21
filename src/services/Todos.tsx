import axios from 'axios';

export const getTodos = async (url: string) => {
  return await axios.get(url);
}

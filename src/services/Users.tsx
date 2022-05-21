import axios from 'axios';

export const getUsers = async(url: string) => {
  return await axios.get(url);
};
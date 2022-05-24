import axios from 'axios';
import config from 'utils/config';

const getTopMovies = async () => {
  const { data } = await axios.get(`/Top250TVs/${config.API_KEY}`);
  return data;
};

export default getTopMovies;

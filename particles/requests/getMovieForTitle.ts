import axios from 'axios';
import config from 'utils/config';

const getMovieForTitle = async (title: string) => {
  const { data } = await axios.get(`/SearchMovie/${config.API_KEY}/${title}`);
  return data;
};

export default getMovieForTitle;

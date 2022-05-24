const config = () => {
  return {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    BASE_URL: 'https://imdb-api.com/en/API',
  };
};

export default config();

const weather = (state) => state.weather.data;
const error = (state) => state.weather.error;

const getters = {
  weather,
  error,
};

export default getters;

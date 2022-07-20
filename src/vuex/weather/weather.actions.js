const fetchWeather = (context, location) => {
  context.commit('setWeather', location);
};

const actions = {
  fetchWeather,
};

export default actions;

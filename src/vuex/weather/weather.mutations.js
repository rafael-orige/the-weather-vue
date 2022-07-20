const setWeather = (state, payload) => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=19e66a9ddfc542c593a130311222007&q=${payload}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.error) {
        state.weather.error = data.error.message;
        return;
      }

      state.weather.error = '';
      state.weather.data = data;
    });
};

const mutations = {
  setWeather,

};

export default mutations;

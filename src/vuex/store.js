import { createStore } from 'vuex';
import weather from './weather/weather.slice';

const store = createStore({
  state() {
    return {
      weather: { ...weather.state },
    };
  },
  getters: {
    ...weather.getters,
  },
  mutations: {
    ...weather.mutations,
  },
  actions: {
    ...weather.actions,
  },
});

export default store;

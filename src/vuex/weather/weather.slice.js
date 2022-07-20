import mutations from './weather.mutations';
import actions from './weather.actions';
import getters from './weather.getters';

const state = {
  data: {},
  error: '',
};

const weather = {
  state,
  getters,
  mutations,
  actions,
};

export default weather;

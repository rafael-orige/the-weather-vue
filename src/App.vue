<template>
  <div :class="`weather-app ${timeOfDay} ${weather} app-${loading}`">
    <MetaInformation />
    <Panel />
  </div>
</template>

<script>

import Panel from './components/Panel/PanelComponent.vue';
import MetaInformation from './components/Meta/MetaInformation.vue';

import checkWeatherImage from './utils/checkWeatherImage';

export default {
  name: 'App',
  components: {
    Panel,
    MetaInformation,
  },
  data() {
    return {
      weather: 'cloudy',
      code: '1000',
      timeOfDay: 'day',
      error: '',
      loading: 'ready',
    };
  },
  mounted() {
    this.$store.commit('setWeather', 'Porto Alegre');
  },
  computed: {
    setWeather() {
      return this.$store.getters.weather;
    },
    getError() {
      return this.$store.getters.error;
    },
  },
  watch: {
    setWeather(state) {
      this.timeOfDay = state.current.is_day ? 'day' : 'night';
      this.code = state.current.condition.code;
      checkWeatherImage(this);
    },
    getError(state) {
      if (!state) return;
      window.alert(state);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" />

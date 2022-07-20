<template>
  <div class="container">
    <h3 class="brand">the weather</h3>
    <div>
      <h1 class="temp">{{temp}}&#176;</h1>
      <div class="city-time">
        <h1 class="name">{{city}}</h1>
        <small>
          <span class="time">{{time}}</span>
          -
          <span class="date">{{date}}</span>
        </small>
      </div>
      <div class="weather">
        <img :src="require(`@/assets/icons${iconCode}`)"
        class="icon" alt="icon" width="50" height="50" />
        <span class="condition">{{condition}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import setMeta from '@/utils/setMeta';

export default {
  name: 'MetaInformation',
  data() {
    return {
      city: '',
      condition: '',
      temp: 0,
      date: '',
      time: '',
      iconCode: '/day/113.png',
      timeOfDay: 'day',
    };
  },
  computed: {
    getWeather() {
      return this.$store.getters.weather;
    },
  },
  watch: {
    getWeather(weather) {
      setMeta(weather, this);
    },
  },
};
</script>

<style src="./MetaInformation.style.scss" lang="scss" scoped />

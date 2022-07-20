<template>
  <div class="panel">
    <form @submit.prevent id="locationInput">
      <input
        type="text"
        class="search"
        placeholder="Search Location..."
        name="search"
        aria-labelledby="locationInput"
        v-model="searchInput"
      />
      <button
        type="submit"
        :class="`submit ${timeOfDay} ${weather}`"
        @click="handleCityClick(searchInput)"
       >
        <i class="fas fa-search"></i>
      </button>
    </form>

    <ul class="cities">
      <li v-for="city in cities"
        v-bind:key="city"
        @click="handleCityClick(city)"
        @keydown="handleCityClick(city)"
        class="city"
      >
        {{city}}
      </li>
    </ul>

    <ul class="details">
      <h4>Weather Details</h4>
      <li>
        <span>Cloudy</span>
        <span class="cloud">{{cloud}}</span>
      </li>
      <li>
        <span>Humidity</span>
        <span class="humidity">{{humidity || '64%'}}</span>
      </li>
      <li>
        <span>Wind</span>
        <span class="wind">{{wind || '8km/h'}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import checkWeatherImage from '@/utils/checkWeatherImage';

export default {
  name: 'PanelComponent',
  data() {
    return {
      cities: [
        'New York',
        'California',
        'Paris',
        'Tokyo',
      ],
      weather: 'cloudy',
      code: 113,
      cloud: '0%',
      humidity: '0%',
      wind: '0km/h',
      searchInput: '',
      timeOfDay: 'day',
    };
  },
  methods: {
    handleCityClick(city) {
      this.searchInput = '';
      this.$store.commit('setWeather', city);
    },
  },
  computed: {
    getWeather() {
      return this.$store.getters.weather;
    },
  },
  watch: {
    getWeather(weather) {
      this.cloud = `${weather.current.cloud}%`;
      this.code = weather.current.condition.code;
      this.timeOfDay = weather.current.is_day ? 'day' : 'night';
      this.humidity = `${weather.current.humidity}%`;
      this.wind = `${weather.current.wind_kph}km/h`;
      checkWeatherImage(this);
    },
  },
};

</script>

<style src="./PanelComponent.style.scss" lang="scss" scoped />

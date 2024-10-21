<template>
  <div id="app">
    <h1>🌦️ Weather App 🌤️</h1>
    <input type="text" v-model="city" placeholder="Enter city name" />
    <button @click="getWeather">Get Weather</button>
    <div v-if="weather">
      <h2>{{ weather.name }} Weather</h2>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Condition: {{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null
    };
  },
  methods: {
    async getWeather() {
      const apiKey = 'your_openweather_api_key';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.weather = data;
    }
  }
};
</script>


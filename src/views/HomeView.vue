<template>
  <div class="container">
    <form class="form">
      <input
        type="text"
        v-model="searchCity"
        @input="getSearchCity"
        placeholder="Пошук міста"
      />
      <ul class="result-list" v-if="mapboxSearchCity">
        <p class="result-list__text" v-if="errorSearch">
          Щось пішло не так, спробуйте ще раз.
        </p>
        <p
          class="result-list__text"
          v-if="!errorSearch && mapboxSearchCity.length === 0"
        >
          Немає результатів, що відповідають вашому запиту.
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchCity"
            :key="searchResult.id"
            class="result-list__text cursor"
            @click="coordinatesCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </form>
    <CardWeather :weather="weather" />
  </div>
</template>

<script>
import axios from "axios";
import CardWeather from "@/components/CardWeather";
import Chart from "chart.js/auto";

export default {
  name: "HomeView",
  components: { CardWeather },
  data() {
    return {
      weather: null,
      searchCity: "",
      queryTimeout: null,
      mapboxSearchCity: null,
      errorSearch: null,
      lat: "",
      lon: "",
      myLineChart: null,
      forecast: null,
    };
  },
  methods: {
    //  getting cities for the autocomplete
    async getSearchCity() {
      clearTimeout(this.queryTimeout);
      this.queryTimeout = setTimeout(async () => {
        if (this.searchCity !== "") {
          try {
            const response = await axios.get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchCity}.json?access_token=${process.env.VUE_APP_MAPBOX_API_KEY}&types=place`
            );
            this.mapboxSearchCity = response.data.features;
          } catch {
            this.errorSearch = true;
          }
        }
      }, 300);
    },
    //  get the city coordinates
    coordinatesCity(searchResult) {
      this.lat = searchResult.geometry.coordinates[1];
      this.lon = searchResult.geometry.coordinates[0];
      if (this.lat && this.lon !== "") {
        this.getWeather();
        this.searchCity = "";
        this.mapboxSearchCity = null;
      }
    },
    //  getting the weather in the city
    async getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric&lang=ua`
        );
        this.weather = response.data;
        this.getHourlyForecast();
      } catch (err) {
        console.log(err);
      }
    },
    //  getting hourly weather
    async getHourlyForecast() {
      this.forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric&lang=ua`
      );

      if (this.myLineChart) {
        this.myLineChart.destroy();
        this.addChart();
      } else {
        this.addChart();
      }
    },
    //  chart addition
    addChart() {
      const hourlyData = this.forecast.data.list.slice(0, 9);
      const labels = hourlyData.map((data) =>
        new Date(data.dt * 1000).getHours()
      );
      const temperatures = hourlyData.map((data) => data.main.temp);

      const ctx = document.getElementById(this.weather.name);

      this.myLineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Температура повітря, °C",
              data: temperatures,
              borderWidth: 1,
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderColor: "rgba(255, 255, 255, 0.5)",
              color: "rgba(255, 255, 255, 1)",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 0 15px;

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0 0 0;
    box-sizing: border-box;
    border: 3px solid #000038;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }

  input[type="text"]:focus {
    border: 3px solid #0000c4;
  }

  .result-list {
    color: white;
    background: rgba(32, 99, 137, 0.3);
    padding: 10px;

    &__text {
      list-style: none;
      text-decoration: none;
      padding: 5px 0;
    }

    .cursor {
      cursor: pointer;
    }
  }
}
</style>

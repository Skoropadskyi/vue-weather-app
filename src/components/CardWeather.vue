<template>
  <div
    class="wrapper"
    v-if="getCitiesStorage.length >= 0 && getCitiesStorage !== null"
  >
    <div v-if="getCitiesStorage.length <= 4" class="card-wrapper">
      <div class="block-plus">
        <div class="plus">+</div>
      </div>
    </div>

    <div v-if="weather !== null" class="card-wrapper">
      <p class="card-add" @click="addCity()">Додати</p>
      <p class="city-name">{{ weather.name }}</p>
      <h1 class="current-temp">{{ Math.round(weather.main.temp) }}°</h1>
      <p class="weather-desc">{{ weather.weather[0].description }}</p>
      <div class="wrapper-temp">
        <p>Max: {{ Math.round(weather.main.temp_max) }}°</p>
        <p>Min: {{ Math.round(weather.main.temp_min) }}°</p>
      </div>
      <img
        class="w-[150px] h-auto"
        :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        alt=""
      />
      <div>
        <h3 class="title-chart">Погодинна погода</h3>
        <canvas style="width: 360px" :id="weather.name"></canvas>
      </div>
    </div>

    <div
      v-for="city in savedCities"
      :key="city.id"
      class="card-wrapper saved-city"
    >
      <p class="card-add" @click="showRemoveModal(city.name)">Видалити</p>
      <p class="city-name">{{ city.name }}</p>
      <h1 class="current-temp">{{ Math.round(city.main.temp) }}°</h1>
      <p class="weather-desc">{{ city.weather[0].description }}</p>
      <div class="wrapper-temp">
        <p>Max: {{ Math.round(city.main.temp_max) }}°</p>
        <p>Min: {{ Math.round(city.main.temp_min) }}°</p>
      </div>
      <img
        class="w-[150px] h-auto"
        :src="`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`"
        alt=""
      />
      <div>
        <h3 class="title-chart">Погодинна погода</h3>
        <canvas style="width: 360px" :id="city.name"></canvas>
      </div>
    </div>
    <Modal
      v-if="isModalVisible"
      :isVisible="isModalVisible"
      title="Підтвердіть видалення"
      message="Ви дійсно хочете видалити це місто?"
      @confirm="removeCity"
      @cancel="hideRemoveModal"
    />
    <ModalAdd
      v-if="isModalMaxVisible"
      :isVisible="isModalMaxVisible"
      title="Максимальна кількість міст"
      message="Ви можете додати максимум 5 міст. Видаліть одне з існуючих міст."
      @cancel="hideMaxCityModal"
    />
  </div>
</template>

<script>
import axios from "axios";
import Chart from "chart.js/auto";
import Modal from "@/components/Modal";
import ModalAdd from "@/components/ModalAdd";
export default {
  name: "CardWeather",
  components: { ModalAdd, Modal },
  props: ["weather"],
  data() {
    return {
      savedCities: [],
      getCitiesStorage: [],
      forecast: null,
      isModalVisible: false,
      isModalMaxVisible: false,
      cityToRemove: null,
    };
  },
  async created() {
    if (localStorage.getItem("savedCities") !== null) {
      this.getCitiesStorage = JSON.parse(localStorage.getItem("savedCities"));
      this.getSavedCitiesWeather();
    }
  },
  methods: {
    //  city adding
    async addCity() {
      let cities = JSON.parse(localStorage.getItem("savedCities")) || [];
      if (cities.length < 5) {
        cities.push(this.weather.name);
        localStorage.setItem("savedCities", JSON.stringify(cities));
        window.location.reload();
      } else {
        this.showMaxCityModal();
      }
    },
    //  show modal
    showRemoveModal(cityName) {
      this.cityToRemove = cityName;
      this.isModalVisible = true;
    },
    showMaxCityModal() {
      this.isModalMaxVisible = true;
    },
    //  hide modal
    hideRemoveModal() {
      this.isModalVisible = false;
      this.cityToRemove = null;
    },
    hideMaxCityModal() {
      this.isModalMaxVisible = false;
    },
    //  remove city
    removeCity() {
      let cities = JSON.parse(localStorage.getItem("savedCities")) || [];
      cities = cities.filter((city) => city !== this.cityToRemove);
      localStorage.setItem("savedCities", JSON.stringify(cities));
      this.getSavedCitiesWeather();
      this.hideRemoveModal();
      window.location.reload();
    },
    //  get city weather
    async getSavedCitiesWeather() {
      let weatherData = [];
      for (let city of this.getCitiesStorage) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric&lang=ua`
        );
        weatherData.push(response.data);
      }
      this.savedCities = weatherData;
      this.getHourlyForecast();
    },
    //  getting hourly weather
    async getHourlyForecast() {
      for (let city of this.getCitiesStorage) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric&lang=ua`
        );

        const hourlyData = response.data.list.slice(0, 9);
        const labels = hourlyData.map((data) =>
          new Date(data.dt * 1000).getHours()
        );
        const temperatures = hourlyData.map((data) => data.main.temp);

        const ctx = document.getElementById(city);

        new Chart(ctx, {
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0;
  .saved-city {
    border: 1px solid #ffda89;
  }
}
.card-wrapper {
  height: 500px;
  width: 360px;
  color: white;
  margin: 0 10px 10px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  .card-add {
    display: flex;
    justify-content: end;
    font-size: 16px;
    padding: 5px 5px 0 0;
    cursor: pointer;
  }
  .city-name {
    font-size: 24px;
    font-weight: bold;
  }
  .current-temp {
    font-size: 60px;
    font-weight: lighter;
    padding: 10px 0;
  }
  .wrapper-temp {
    display: flex;
    gap: 15px;
    padding-top: 10px;
  }

  .block-plus {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plus {
    font-size: 72px;
    font-weight: bold;
  }
}
</style>

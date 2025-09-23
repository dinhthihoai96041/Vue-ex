<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Spinner from './Spinner.vue'

const searchCity = ref('')
const weather = ref<any>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const API_KEY = 'b02b106284837fcbda54df2b397c0285'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

async function fetchWeather(city: string) {
  if (!city) return
  loading.value = true
  error.value = null
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'en'
      }
    })
    weather.value = res.data
  } catch {
    error.value = 'City not found!'
    weather.value = null
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchWeather('London'))
</script>

<template>
  <div class="bg-white rounded-2xl shadow-inner p-6 my-auto w-full max-w-md">
    <h1 class="text-2xl text-center font-bold mb-4">Weather App</h1>

    <form @submit.prevent="fetchWeather(searchCity)" class="flex mb-4 w-full">
      <InputText
        v-model="searchCity"
        type="text"
        placeholder="Enter city"
        class="px-3 py-2 border rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-[#64decd] w-full"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-[#8d4be7] text-white rounded-md hover:bg-[#64decd]  hover:text-blue-800 transition"
      >
        Search
      </button>
    </form>

    <Spinner v-if="loading" />

    <p v-if="error" class="text-red-500 font-semibold flex justify-center">{{ error }}</p>

    <div v-if="weather && !loading" class=" p-5 rounded-xl text-white bg-gradient-to-b from-[#8d4be7] to-[#4483d1] shadow">
      <h2 class="text-2xl font-semibold text-center">{{ weather.name }}, {{ weather.sys.country }}</h2>
      <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="icon" class="mx-auto" />
      <p class="text-3xl font-bold text-center">{{ Math.round(weather.main.temp) }}°C</p>
      <p class="capitalize pt-8">{{ weather.weather[0].description }}</p>
      <div class="mt-3 grid grid-cols-3 gap-3 text-center">
        <div class="bg-white/10 backdrop-blur p-3 rounded shadow">
          <p>Humidity</p>
          <p class="font-bold">{{ weather.main.humidity }}%</p>
        </div>

        <div class=" bg-white/10 backdrop-blur p-3 rounded shadow">
          <p>Wind</p>
          <p class="font-bold">{{ weather.wind.speed }} m/s</p>
        </div>

        <div class="bg-white/10 backdrop-blur p-3 rounded shadow">
          <p>Feels like</p>
          <p class="font-bold">{{ Math.round(weather.main.feels_like) }}°C</p>
        </div>
      </div>

    </div>
  </div>
</template>

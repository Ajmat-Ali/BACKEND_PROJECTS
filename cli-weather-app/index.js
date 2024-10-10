require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather`;

const getWeatherData = async (city) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    const { name, weather, main } = res.data;
    console.log(`Weather in ${name}:`);
    console.log(`Temperature: ${main.temp}°C`);
    console.log(`Description: ${weather[0].description}`);
  } catch (error) {
    console.log(error);
  }
};

const city = process.argv[2];
if (!city) {
  console.log("Please provide a city name.");
  process.exit(1);
}
getWeatherData(city);

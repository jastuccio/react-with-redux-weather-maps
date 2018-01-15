import axios from 'axios';

const API_KEY = "fce04cb5049ce3a0aa3afab93aa75c83";
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

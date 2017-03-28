import axios from 'axios';

const API_KEY = "902aecc16b6e79dff57b486c114d62a2";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY = 'th';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},${COUNTRY}`;
    const request = axios.get(url); //return the promise

    console.log(`[ACTION] url : [${url}]`);
    console.log('[ACTION] request : ', request);

    return {
        type : FETCH_WEATHER,
        payload : request   // if payload is promise, stop action entiry ==> dispatch after get result, wait until get result from server then send to reducer
    }
}
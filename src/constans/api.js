import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const API_KEY = '8d1733f520a5bd6e4c01849aed552ae2';
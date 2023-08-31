import axios from 'axios';
import Cookies from 'js-cookie';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const request = axios.create({
  baseURL:  PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

// Add a request interceptor
request.interceptors.request.use(function (config) {
  if (Cookies.get('token')) {
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
    return config;
  }
  return config;
});

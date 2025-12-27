import AsyncStorage from '@react-native-async-storage/async-storage';
import type { CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { BASE_URL } from '@env';

console.log(BASE_URL, '<----');

const axiosConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
};

const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    const token = await AsyncStorage.getItem('accessToken');

    config.headers = config.headers ?? {};

    (config.headers as Record<string, string>).Authorization = token
      ? `Bearer ${token}`
      : '';

    return config;
  },
  error => Promise.reject(error),
);

export { httpClient };

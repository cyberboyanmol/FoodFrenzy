import axios, {AxiosInstance} from 'axios';
import {Platform} from 'react-native';
// import {appStore, userStore} from '../stores';

export let axiosInstance: AxiosInstance | null = null;

export const getPrefixBaseUrl = (): string =>
  Platform.OS !== 'android'
    ? `http://${appStore.privateIp}:3000/api`
    : 'http://localhost:3000/api';

export const createAxiosInstance = (): AxiosInstance => {
  const accessToken = 'userStore.user.accessToken' || null;
  axiosInstance = axios.create({
    baseURL: getPrefixBaseUrl(),
    timeout: 10000,
    headers: {Authorization: `Bearer ${accessToken}`},
  });
  return axiosInstance;
};

export const baseAuthUrl = '/auth';
export const baseUrl = '/data';

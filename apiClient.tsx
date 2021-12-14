import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

apiClient.interceptors.request.use(async config => {
  const userJson = await AsyncStorage.getItem('@user');

  if (!userJson) {
    return config;
  }

  const {accessToken} = JSON.parse(userJson);

  return {
    ...config,
    headers: {
      ...config.headers,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

export default apiClient;

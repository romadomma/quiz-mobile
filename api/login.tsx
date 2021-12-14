import apiClient from '../apiClient';
import {sha256} from 'js-sha256';
import {User} from '../types';

export type LoginProps = {
  email: string;
  password: string;
};

const login = async ({email, password}: LoginProps): Promise<User> => {
  const {data} = await apiClient.post<User>('/auth/login', {
    email,
    passwordHash: sha256(password),
  });
  return data;
};

export default login;

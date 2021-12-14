import apiClient from '../apiClient';
import {Quiz} from '../types';

const getQuizzes = async (): Promise<Quiz[]> => {
  const {data} = await apiClient.get<Quiz[]>('/quiz');
  return data;
};

export default getQuizzes;

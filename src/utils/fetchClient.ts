/* eslint-disable @typescript-eslint/no-explicit-any */
import axious from 'axios';

const BASE_URL = 'https://mate.academy/students-api';

const requests = {
  get: (pathname: string) => axious.get(`${BASE_URL}${pathname}`),
};

export const getPhones = () => requests.get('/HERE_will_be_url');

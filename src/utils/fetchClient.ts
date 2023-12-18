/* eslint-disable @typescript-eslint/no-explicit-any */
import axious from 'axios';
import { ItemsNum } from '../helpers/helper';

export const BASE_URL = 'https://product-catalog-api-e4vw.onrender.com';
// const BASE_URL = 'http://localhost:3005';

const requests = {
  get: (pathname: string) => axious.get(`${BASE_URL}${pathname}`),
};

// eslint-disable-next-line max-len
export const getPhones = (
  sortBy: string,
  page: number,
  itemsPerPage: ItemsNum,
) => {
  return requests.get(
    `/phones?sortBy=${sortBy}&page=${page}&itemsPerPage=${itemsPerPage}`,
  );
};

export const getAllProducts = () => requests.get('/phones/allProducts');

export const getLength = () => requests.get('/phones/length');

export const getOnePhone = (id: any) => requests.get(`/phones:${id}`);

export const getPhonesWithMaxDiscount = () => requests.get('/phones/discount');

export const getTheNewestPhones = () => requests.get('/phones/newest');

export const getRecomendationPhones = (phoneId: string) => {
  return requests.get(`/phones/:${phoneId}/recomendation`);
};

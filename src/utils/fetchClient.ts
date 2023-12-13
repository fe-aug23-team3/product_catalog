/* eslint-disable @typescript-eslint/no-explicit-any */
import axious from 'axios';

export const BASE_URL = 'https://product-catalog-api-e4vw.onrender.com';
// const BASE_URL = 'http://localhost:3005';

const requests = {
  get: (pathname: string) => axious.get(`${BASE_URL}${pathname}`),
};

export type ItemsNum = '4' | '8' | '16' | 'All';
// eslint-disable-next-line max-len
export const getPhones = (
  sortBy = 'newest',
  page: number,
  itemsPerPage: ItemsNum,
) => {
  return requests.get(
    `/phones?sortBy=${sortBy}&page=${page}&itemsPerPage=${itemsPerPage}`,
  );
};

export const getLength = () => requests.get('/phones/length');

export const getOnePhone = (id: any) => requests.get(`/phones:${id}`);

export const getPhonesWithMaxDiscount = () => requests.get('/phones/discount');

export const getTheNewestPhones = () => requests.get('/phones/newest');

export const getRecomendationPhones = (phoneId: string) => {
  return requests.get(`/phones/:${phoneId}/recomendation`);
};

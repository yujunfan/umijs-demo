import request from '@/utils/request';

const fetchData =
  (url, method = 'POST') =>
  (data) => {
    return request(url, {
      method,
      data,
    });
  };
export const GetAllCommunity = fetchData(
  '/sr-sesis-analysis/V1/informationDisclosureSystem/getAllCommunity',
);

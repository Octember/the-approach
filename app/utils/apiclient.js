import request from 'utils/request';

export const BASE_URL = 'https://d3rkxlbyhfietr.cloudfront.net';
const makeUrl = (route) => `${BASE_URL}${route}`;

export function postRequest(endpoint, data) {
  const accessToken = localStorage.getItem('access_token') || null;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  return request(makeUrl(endpoint), config);
}

export function getRequest(endpoint) {
  return request(makeUrl(endpoint));
}

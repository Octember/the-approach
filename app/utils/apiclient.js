import request from 'utils/request';

export const BASE_URL = 'http://approach-server-1687250913.us-east-2.elb.amazonaws.com';
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

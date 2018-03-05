
import request from 'utils/request';

export const callApi = (endpoint) => {
  const token = localStorage.getItem('access_token') || null;
  let config = {};

  if (token) {
    config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  } else {
    console.warn('No token saved for request ' + endpoint);
  }

  return request(endpoint, config);
};

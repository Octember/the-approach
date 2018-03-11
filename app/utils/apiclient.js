
import request from 'utils/request';

export default function postRequest(endpoint, data) {
  const accessToken = localStorage.getItem('access_token') || null;
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  return request(endpoint, config);
}

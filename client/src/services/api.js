import 'isomorphic-fetch';
import { URL } from 'whatwg-url';
const API_URL = (process.env.API_URL || 'http://localhost:3001') + '/api';

export async function fetchReports(params) {
  const url = new URL(`${API_URL}/reports`);
  Object.keys(params).forEach(key => {
    if (Array.isArray(params[key])) {
      params[key].forEach(value => url.searchParams.append(`${key}[]`, value))
    } else {
      url.searchParams.append(key, params[key]);
    }
  })
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('Failed to load reports')
  }
  return response.json();
}

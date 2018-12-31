import 'isomorphic-fetch';
import { URL } from 'whatwg-url';
const API_URL = (process.env.API_URL || 'http://localhost:3001') + '/api';

const REPORTS_PARAMS = ['columns', 'page', 'perPage', 'filter', 'startDate', 'endDate', 'orderBy', 'orderDir'];
export async function fetchReports(params) {
  const url = new URL(`${API_URL}/reports`);
  appendSearchParams(url, params, REPORTS_PARAMS);
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('Failed to load reports')
  }
  return response.json();
}

const REPORTS_COUNT_PARAMS = ['columns', 'filter', 'startDate', 'endDate'];
export async function fetchReportsCount(params) {
  const url = new URL(`${API_URL}/reports/count`);
  appendSearchParams(url, params, REPORTS_COUNT_PARAMS);
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('Failed to load reports count')
  }
  return response.json();
}
export async function fetchAdvertisers() {
  const response = await fetch(`${API_URL}/advertisers`);
  if (response.status !== 200) {
    throw new Error('Failed to load advertisers')
  }
  return response.json();
}

export async function fetchCampaigns() {
  const response = await fetch(`${API_URL}/campaigns`);
  if (response.status !== 200) {
    throw new Error('Failed to load campaigns')
  }
  return response.json();
}

function appendSearchParams(url, params, paramWhitelist) {
  Object.keys(params).forEach(key => {
    if (!paramWhitelist.includes(key)) {
      return;
    }
    if (Array.isArray(params[key])) {
      params[key].forEach(value => url.searchParams.append(`${key}[]`, value))
    } else if (typeof params[key] === 'object'){
      url.searchParams.append(key, JSON.stringify(params[key]));
    } else {
      url.searchParams.append(key, params[key]);
    }
  });
}

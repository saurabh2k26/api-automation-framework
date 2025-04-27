const ENV = process.env.TEST_ENV || 'dev';

const config = {
  dev: {
    API_BASE_URL: 'https://jsonplaceholder.typicode.com',
    HEADERS: { 'Content-Type': 'application/json' },
  },
  staging: {
    API_BASE_URL: 'https://staging.example.com',
    HEADERS: { 'Content-Type': 'application/json' },
  },
  prod: {
    API_BASE_URL: 'https://api.example.com',
    HEADERS: { 'Content-Type': 'application/json' },
  },
};

export const API_BASE_URL = config[ENV].API_BASE_URL;
export const HEADERS = config[ENV].HEADERS;
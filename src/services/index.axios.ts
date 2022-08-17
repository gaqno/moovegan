import axios from 'axios';

const BASE_ENDPOINT = 'http://localhost:3001/v1';

const accessControl = axios.create({
  baseURL: BASE_ENDPOINT,
});

export { accessControl };

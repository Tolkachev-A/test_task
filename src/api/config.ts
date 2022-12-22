import axios from 'axios';

import { BaseURL } from 'enums';

export const instance = axios.create({
  baseURL: BaseURL.BASE_URL,
});

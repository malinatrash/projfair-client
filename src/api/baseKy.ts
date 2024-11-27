import ky from 'ky';
import { useToast } from 'vue-toastification';
import {
  AUTH_TOKEN_KEY,
  getAuthTokenFromCookies,
} from './AuthApi/utils/authToken';

const toast = useToast();

// 1 час = 3600000 мс
export const DEFAULT_QUERY_STALE_TIME = 2 * 3600000;

const apiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_LOCAL
  : import.meta.env.VITE_API_URL;

export const baseKyInstance = ky.create({
  prefixUrl: apiUrl,
  retry: { limit: 5, statusCodes: [408, 413, 429, 502, 503, 504] },
  hooks: {
    beforeRequest: [
      (request) => {
        const authToken = getAuthTokenFromCookies();
        if (authToken) request.headers.set(AUTH_TOKEN_KEY, authToken);
      },
    ],
    afterResponse: [
      (input, options, response) => {
        if (response.status === 429) {
          toast.warning('Сервер перегружен, пожалуйста подождите.');
        }
      },
    ],
  },
});

import axios from 'axios';

export function getApiErrorMessage(error: unknown, fallback = 'Something went wrong') {
  if (!axios.isAxiosError(error)) {
    return fallback;
  }

  const data = error.response?.data as { message?: unknown } | undefined;

  return typeof data?.message === 'string' ? data.message : error.message || fallback;
}

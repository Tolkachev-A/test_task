import axios, { AxiosError } from 'axios';

import { setError } from 'store/actions';
import { AppDispatchType } from 'store/types';

export const handleServerNetworkError = (
  e: Error | AxiosError<{ error: string }>,
  dispatch: AppDispatchType,
): void => {
  if (axios.isAxiosError(e)) {
    const error = e.response?.data ? e.response.data.message : e.message;

    dispatch(setError(error));
  } else {
    dispatch(setError(`Native error ${e.message}`));
  }
};

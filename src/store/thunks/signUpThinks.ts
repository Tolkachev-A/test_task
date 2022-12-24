import { AxiosError } from 'axios';

import { api } from 'api';
import { setSignUpStatusLoading } from 'store/actions';
import { getNextUser } from 'store/thunks/usersThunks';
import { AppStoreType, AppThunkType } from 'store/types';
import { handleServerNetworkError } from 'utils';

export const executeRegistrationUser =
  (data: FormData): AppThunkType =>
  async (dispatch, getState: () => AppStoreType) => {
    try {
      dispatch(setSignUpStatusLoading('loading'));

      const { token } = getState().users;

      if (token) {
        const res = await api.setRegistrationUser(token, data);

        if (res.data.success) {
          dispatch(getNextUser(1, true));
        }
      }

      dispatch(setSignUpStatusLoading('succeeded'));
    } catch (e) {
      handleServerNetworkError(e as Error | AxiosError<{ error: string }>, dispatch);
      dispatch(setSignUpStatusLoading('failed'));
    }
  };

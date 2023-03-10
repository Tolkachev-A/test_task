import { AxiosError } from 'axios';

import { api } from 'api';
import { setIsInitializedApp, setUsersPositions } from 'store/actions';
import {
  setDataUsers,
  setNextUsers,
  setToken,
  setUsersStatusLoading,
} from 'store/actions/usesrsAction';
import { AppThunkType, DataNextUsersType, QueryUsersParamsType } from 'store/types';
import { handleServerNetworkError } from 'utils';

export const getInitializedApp =
  (params: QueryUsersParamsType): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setUsersStatusLoading('loading'));

      const res = await Promise.all([
        api.getUsers(params),
        api.getUsersPositions(),
        api.getToKen(),
      ]);

      dispatch(setDataUsers(res[0].data));
      dispatch(setUsersPositions(res[1].data.positions));
      // eslint-disable-next-line no-magic-numbers
      dispatch(setToken(res[2].data.token));
      dispatch(setIsInitializedApp(true));
      dispatch(setUsersStatusLoading('succeeded'));
    } catch (e) {
      handleServerNetworkError(e as Error | AxiosError<{ error: string }>, dispatch);
      dispatch(setUsersStatusLoading('failed'));
      dispatch(setIsInitializedApp(false));
    }
  };

export const getNextUser =
  (page: number, removePrevUsers = false): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setUsersStatusLoading('loading'));

      const res = await api.getUsers({ page, count: 6 });

      const date: DataNextUsersType = {
        page: res.data.page,
        users: res.data.users,
        links: res.data.links,
        removePrevUsers,
      };

      dispatch(setNextUsers(date));
      dispatch(setUsersStatusLoading('succeeded'));
    } catch (e) {
      handleServerNetworkError(e as Error | AxiosError<{ error: string }>, dispatch);
      dispatch(setUsersStatusLoading('failed'));
    }
  };

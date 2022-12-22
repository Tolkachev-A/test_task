import { api } from 'api';
import { setIsInitializedApp } from 'store/actions';
import {
  setDataUsers,
  setNextUsers,
  setUsersStatusLoading,
} from 'store/actions/usesrsAction';
import { AppThunkType, DataNextUsersType, QueryUsersParamsType } from 'store/types';

export const getUsers =
  (params: QueryUsersParamsType): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setUsersStatusLoading('loading'));

      const res = await api.getUsers(params);

      dispatch(setDataUsers(res.data));
      dispatch(setIsInitializedApp());
      dispatch(setUsersStatusLoading('succeeded'));
    } catch (e) {
      console.log(e);
    }
  };

export const getNextUser =
  (page: number): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setUsersStatusLoading('loading'));

      const res = await api.getUsers({ page, count: 6 });

      const date: DataNextUsersType = {
        page: res.data.page,
        users: res.data.users,
        links: res.data.links,
      };

      dispatch(setNextUsers(date));
      dispatch(setUsersStatusLoading('succeeded'));
    } catch (e) {
      console.log(e);
    }
  };

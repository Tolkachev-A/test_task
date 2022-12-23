import { ResponseUsersType } from 'api/types';
import { UsersActionType } from 'enums';
import {
  DataNextUsersType,
  SetDataUsersType,
  SetNextUsersType,
  SetStatusLoadingType,
  SetTokenType,
  StatusType,
} from 'store/types';

export const setDataUsers = (payload: ResponseUsersType): SetDataUsersType => ({
  type: UsersActionType.SET_DATA_USERS,
  payload,
});

export const setNextUsers = (payload: DataNextUsersType): SetNextUsersType => ({
  type: UsersActionType.SET_NEXT_USERS,
  payload,
});

export const setUsersStatusLoading = (payload: StatusType): SetStatusLoadingType => ({
  type: UsersActionType.SET_USERS_STATUS_LOADING,
  payload,
});

export const setToken = (payload: string): SetTokenType => ({
  type: UsersActionType.SET_TOKEN,
  payload,
});

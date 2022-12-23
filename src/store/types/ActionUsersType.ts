import { ResponseUsersType } from 'api/types';
import { UsersActionType } from 'enums';
import { DataNextUsersType } from 'store/types/DataSetNextUsersType';
import { StatusType } from 'store/types/StatusType';

export type ActionUsersType =
  | SetDataUsersType
  | SetNextUsersType
  | SetStatusLoadingType
  | SetTokenType;

export type SetDataUsersType = {
  type: UsersActionType.SET_DATA_USERS;
  payload: ResponseUsersType;
};

export type SetNextUsersType = {
  type: UsersActionType.SET_NEXT_USERS;
  payload: DataNextUsersType;
};

export type SetStatusLoadingType = {
  type: UsersActionType.SET_USERS_STATUS_LOADING;
  payload: StatusType;
};
export type SetTokenType = {
  type: UsersActionType.SET_TOKEN;
  payload: string;
};

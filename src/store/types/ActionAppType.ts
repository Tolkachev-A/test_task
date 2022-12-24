import { AppActionType } from 'enums';
import { NullableType } from 'store/types/NullableType';

export type ActionAppType = SetIsInitializedAppType | SetErrorType;

export type SetIsInitializedAppType = {
  type: AppActionType.SET_IS_INITIALIZED_APP;
  payload: boolean;
};

export type SetErrorType = {
  type: AppActionType.SET_ERROR;
  payload: NullableType<string>;
};

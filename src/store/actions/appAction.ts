import { AppActionType } from 'enums';
import { SetErrorType, SetIsInitializedAppType } from 'store/types';
import { NullableType } from 'store/types/NullableType';

export const setIsInitializedApp = (payload: boolean): SetIsInitializedAppType => ({
  type: AppActionType.SET_IS_INITIALIZED_APP,
  payload,
});
export const setError = (payload: NullableType<string>): SetErrorType => ({
  type: AppActionType.SET_ERROR,
  payload,
});

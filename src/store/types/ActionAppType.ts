import { AppActionType } from 'enums';

export type ActionAppType = SetIsInitializedAppType;

export type SetIsInitializedAppType = {
  type: AppActionType.SET_IS_INITIALIZED_APP;
};

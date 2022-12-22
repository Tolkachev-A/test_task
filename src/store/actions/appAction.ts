import { AppActionType } from 'enums';
import { SetIsInitializedAppType } from 'store/types';

export const setIsInitializedApp = (): SetIsInitializedAppType => ({
  type: AppActionType.SET_IS_INITIALIZED_APP,
});

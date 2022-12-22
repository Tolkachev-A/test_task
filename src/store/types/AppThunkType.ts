import { ThunkAction } from 'redux-thunk';

import { ActionType } from 'store/types/ActionType';
import { AppStoreType } from 'store/types/AppStoreType';

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreType,
  unknown,
  ActionType
>;

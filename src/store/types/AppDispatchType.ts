import { ThunkDispatch } from 'redux-thunk';

import { ActionType } from 'store/types/ActionType';
import { AppStoreType } from 'store/types/AppStoreType';

export type AppDispatchType = ThunkDispatch<AppStoreType, unknown, ActionType>;

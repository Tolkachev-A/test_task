import { AppActionType } from 'enums';
import { ActionAppType, AppStateType } from 'store/types';

const initAppState: AppStateType = {
  isInitializedApp: false,
};

// eslint-disable-next-line default-param-last
export const appReducer = (state = initAppState, action: ActionAppType): AppStateType => {
  switch (action.type) {
    case AppActionType.SET_IS_INITIALIZED_APP:
      return {
        ...state,
        isInitializedApp: true,
      };
    default:
      return state;
  }
};

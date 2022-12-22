import { SignUpActionType } from 'enums';
import { ActionSignUpType, StateSignUpType } from 'store/types';

const initSignUpState: StateSignUpType = {
  positions: [],
  statusLoading: 'idle',
};

export const signUpReducer = (
  // eslint-disable-next-line default-param-last
  state = initSignUpState,
  action: ActionSignUpType,
): StateSignUpType => {
  switch (action.type) {
    case SignUpActionType.SET_USER_POSITIONS:
      return {
        ...state,
        positions: action.payload,
      };
    case SignUpActionType.SET_SIGN_UP_STATUS_LOADING:
      return {
        ...state,
        statusLoading: action.payload,
      };
    default:
      return state;
  }
};

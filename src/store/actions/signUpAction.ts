import { SignUpActionType } from 'enums';
import {
  PositionsType,
  SetSignUpStatusLoadingType,
  SetUsersPositionsType,
  StatusType,
} from 'store/types';

export const setUsersPositions = (payload: PositionsType[]): SetUsersPositionsType => ({
  type: SignUpActionType.SET_USER_POSITIONS,
  payload,
});

export const setSignUpStatusLoading = (
  payload: StatusType,
): SetSignUpStatusLoadingType => ({
  type: SignUpActionType.SET_SIGN_UP_STATUS_LOADING,
  payload,
});

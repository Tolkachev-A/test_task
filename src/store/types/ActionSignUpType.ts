import { SignUpActionType } from 'enums';
import { PositionsType } from 'store/types/PositionsType';
import { StatusType } from 'store/types/StatusType';

export type ActionSignUpType = SetUsersPositionsType | SetSignUpStatusLoadingType;

export type SetUsersPositionsType = {
  type: SignUpActionType.SET_USER_POSITIONS;
  payload: PositionsType[];
};

export type SetSignUpStatusLoadingType = {
  type: SignUpActionType.SET_SIGN_UP_STATUS_LOADING;
  payload: StatusType;
};

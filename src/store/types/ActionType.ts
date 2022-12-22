import { SetIsInitializedAppType } from 'store/types/ActionAppType';
import {
  SetSignUpStatusLoadingType,
  SetUsersPositionsType,
} from 'store/types/ActionSignUpType';
import {
  SetDataUsersType,
  SetNextUsersType,
  SetStatusLoadingType,
} from 'store/types/ActionUsersType';

export type ActionType =
  | SetDataUsersType
  | SetNextUsersType
  | SetIsInitializedAppType
  | SetStatusLoadingType
  | SetSignUpStatusLoadingType
  | SetUsersPositionsType;

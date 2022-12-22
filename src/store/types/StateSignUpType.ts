import { PositionsType } from 'store/types/PositionsType';
import { StatusType } from 'store/types/StatusType';

export type StateSignUpType = {
  positions: PositionsType[];
  statusLoading: StatusType;
};

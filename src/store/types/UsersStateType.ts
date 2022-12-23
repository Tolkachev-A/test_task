import { ResponseUsersType } from 'api/types';
import { NullableType } from 'store/types/NullableType';
import { StatusType } from 'store/types/StatusType';

export type UsersStateType = ResponseUsersType & {
  statusLoading: StatusType;
  token: NullableType<string>;
};

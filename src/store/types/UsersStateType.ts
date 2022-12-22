import { ResponseUsersType } from 'api/types';
import { StatusType } from 'store/types/StatusType';

export type UsersStateType = ResponseUsersType & { statusLoading: StatusType };

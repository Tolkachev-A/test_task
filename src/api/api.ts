import { instance } from 'api/config';
import { ResponsePositionsType } from 'api/types';
import { ResponseUsersType } from 'api/types/ResponseUsersType';
import { QueryUsersParamsType } from 'store/types';

export const api = {
  getUsers(params: QueryUsersParamsType) {
    return instance.get<ResponseUsersType>('users', { params });
  },
  getUsersPositions() {
    return instance.get<ResponsePositionsType>('positions');
  },
};

import { instance } from 'api/config';
import {
  ResponsePositionsType,
  ResponseRegistrationUserType,
  ResponseTokenType,
} from 'api/types';
import { ResponseUsersType } from 'api/types/ResponseUsersType';
import { QueryUsersParamsType } from 'store/types';

export const api = {
  getUsers(params: QueryUsersParamsType) {
    return instance.get<ResponseUsersType>('users', { params });
  },

  getUsersPositions() {
    return instance.get<ResponsePositionsType>('positions');
  },

  getToKen() {
    return instance.get<ResponseTokenType>('token');
  },

  setRegistrationUser(token: string, data: FormData) {
    return instance.post<ResponseRegistrationUserType>('users', data, {
      headers: {
        Token: `${token}`,
      },
    });
  },
};

import { AppStoreType, PositionsType, StatusType, UserType } from 'store/types';
import { NullableType } from 'store/types/NullableType';

export const selectPage = (state: AppStoreType): number => state.users.page;

export const selectCount = (state: AppStoreType): number => state.users.count;

export const selectUsers = (state: AppStoreType): UserType[] => state.users.users;

export const selectNextUrl = (state: AppStoreType): NullableType<string> =>
  state.users.links.next_url;

export const selectIsInitializedApp = (state: AppStoreType): NullableType<boolean> =>
  state.app.isInitializedApp;

export const selectUserStatusLoading = (state: AppStoreType): StatusType =>
  state.users.statusLoading;

export const selectSingUpStatusLoading = (state: AppStoreType): StatusType =>
  state.signUp.statusLoading;

export const selectPositions = (state: AppStoreType): PositionsType[] =>
  state.signUp.positions;

export const selectError = (state: AppStoreType): NullableType<string> => state.app.error;

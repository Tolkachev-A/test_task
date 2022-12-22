import { AppStoreType, StatusType, UserType } from 'store/types';
import { NullableType } from 'store/types/NullableType';

export const selectPage = (state: AppStoreType): number => state.users.page;

export const selectCount = (state: AppStoreType): number => state.users.count;

export const selectUsers = (state: AppStoreType): UserType[] => state.users.users;

export const selectNextUrl = (state: AppStoreType): NullableType<string> =>
  state.users.links.next_url;

export const selectIsInitializedApp = (state: AppStoreType): boolean =>
  state.app.isInitializedApp;

export const selectUserStatusLoading = (state: AppStoreType): StatusType =>
  state.users.statusLoading;

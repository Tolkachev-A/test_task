import { UserType } from 'store/types';

export const getNewUsers = (
  prevUsers: UserType[],
  newUsers: UserType[],
  removePrevUsers: boolean,
): UserType[] => {
  if (removePrevUsers) {
    return newUsers;
  }

  return [...prevUsers, ...newUsers];
};

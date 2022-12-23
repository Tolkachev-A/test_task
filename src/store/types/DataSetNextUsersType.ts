import { LinksType } from 'api/types';
import { UserType } from 'store/types/UserType';

export type DataNextUsersType = {
  page: number;
  links: LinksType;
  users: UserType[];
  removePrevUsers: boolean;
};

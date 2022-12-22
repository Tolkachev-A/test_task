import { LinksType } from 'api/types/LinksType';
import { UserType } from 'store/types';
import { NullableType } from 'store/types/NullableType';

export type ResponseUsersType = {
  success: boolean;
  page: number;
  total_pages: NullableType<number>;
  total_users: NullableType<number>;
  count: number;
  links: LinksType;
  users: UserType[];
};

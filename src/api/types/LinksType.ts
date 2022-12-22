import { NullableType } from 'store/types/NullableType';

export type LinksType = {
  next_url: NullableType<string>;
  prev_url: NullableType<string>;
};

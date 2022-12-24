import { NullableType } from 'store/types/NullableType';

export type AppStateType = {
  isInitializedApp: NullableType<boolean>;
  error: NullableType<string>;
};

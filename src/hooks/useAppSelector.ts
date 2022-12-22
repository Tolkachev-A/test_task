import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppStoreType } from 'store/types';

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;

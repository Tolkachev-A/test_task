import { useDispatch } from 'react-redux';

import { AppDispatchType } from 'store/types';

export const useAppDispatch = (): AppDispatchType => useDispatch<AppDispatchType>();

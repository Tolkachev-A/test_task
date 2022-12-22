import { store } from 'store/store';

export type AppStoreType = ReturnType<typeof store.getState>;

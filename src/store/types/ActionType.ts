import { ActionAppType } from 'store/types/ActionAppType';
import { ActionSignUpType } from 'store/types/ActionSignUpType';
import { ActionUsersType } from 'store/types/ActionUsersType';

export type ActionType = ActionAppType | ActionSignUpType | ActionUsersType;

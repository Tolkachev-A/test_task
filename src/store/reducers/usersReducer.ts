import { UsersActionType } from 'enums';
import { ActionUsersType, UsersStateType } from 'store/types';

const initUsersState: UsersStateType = {
  statusLoading: 'idle',
  page: 1,
  count: 6,
  total_users: null,
  success: false,
  total_pages: null,
  links: { next_url: null, prev_url: null },
  users: [],
};

export const usersReducer = (
  // eslint-disable-next-line default-param-last
  state = initUsersState,
  action: ActionUsersType,
): UsersStateType => {
  switch (action.type) {
    case UsersActionType.SET_DATA_USERS:
      return {
        ...state,
        ...action.payload,
      };
    case UsersActionType.SET_NEXT_USERS:
      return {
        ...state,
        page: action.payload.page,
        users: [...state.users, ...action.payload.users],
        links: action.payload.links,
      };
    case UsersActionType.SET_USERS_STATUS_LOADING:
      return {
        ...state,
        statusLoading: action.payload,
      };
    default:
      return state;
  }
};

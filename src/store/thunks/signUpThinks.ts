import { api } from 'api';
import { setSignUpStatusLoading, setUsersPositions } from 'store/actions';
import { AppThunkType } from 'store/types';

export const getUsersPositions = (): AppThunkType => async dispatch => {
  try {
    dispatch(setSignUpStatusLoading('loading'));

    const res = await api.getUsersPositions();

    dispatch(setUsersPositions(res.data.positions));
    dispatch(setSignUpStatusLoading('succeeded'));
  } catch (e) {
    console.log(e);
  }
};

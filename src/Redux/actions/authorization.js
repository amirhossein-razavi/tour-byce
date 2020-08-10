import * as ActionTypes from './ActionTypes';

export const changeAuthStatus = (val) => ({
  type: ActionTypes.CHANGE_AUTH_STATUS,
  payload: val,
});
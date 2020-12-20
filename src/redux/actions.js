//CONSTANTS
export const USERS_FETCH = 'USERS_FETCH';
export const USERS_FETCH_CANCEL = 'USERS_FETCH_CANCEL';
export const USERS_FETCH_FULFILLED = 'USERS_FETCH_FULFILLED';
export const USERS_FETCH_REJECTED = 'USERS_FETCH_REJECTED';

//ACTIONS
export function usersFetch(id) {
  return {type: USERS_FETCH, id};
}
function usersFetchCancel() {
  return {type: USERS_FETCH_CANCEL};
}

import {createLogic} from 'redux-logic';
import {
  USERS_FETCH,
  USERS_FETCH_CANCEL,
  USERS_FETCH_FULFILLED,
  USERS_FETCH_REJECTED,
} from '../actions';

const delay = 2; // 2s delay for interactive use of cancel/take latest

export const usersFetchLogic = createLogic({
  type: USERS_FETCH,
  cancelType: USERS_FETCH_CANCEL,
  latest: true, // take latest only

  async process({httpClient, action}, dispatch, done) {
    const service = await httpClient
      .get(`https://reqres.in/api/users/${action.id}?`)
      .then((resp) => resp.data.data);
    try {
      const users = service;
      dispatch({
        type: USERS_FETCH_FULFILLED,
        payload: users,
      });
    } catch (err) {
      console.error(err); // might be a render err
      dispatch({
        type: USERS_FETCH_REJECTED,
        payload: err,
        error: true,
      });
    }
    done(); // call when finished dispatching
  },
});

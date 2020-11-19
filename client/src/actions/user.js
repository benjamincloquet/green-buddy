import { FETCH_USER } from './types';

const fetchUser = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: FETCH_USER,
      payload: false,
    });
  }, 1000);
};

export default fetchUser;

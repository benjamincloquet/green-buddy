import axios from 'axios';
import FETCH_USER from './types';

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get('/api/user');
  console.log(response);
  dispatch({
    type: FETCH_USER,
    payload: response.data || null,
  });
};

export const login = () => async (dispatch) => {
  const response = await axios.post('/api/login', {
    email: 'benjamin.cloquet@gmail.com',
    password: 'abc123',
  });
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

import axios from 'axios';
import USER from './types';

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get('/api/user');
  dispatch({
    type: USER,
    payload: response.data || null,
  });
};

export const login = () => async (dispatch) => {
  const response = await axios.post('/api/login', {
    email: 'benjamin.cloquet@gmail.com',
    password: 'abc123',
  });
  dispatch({
    type: USER,
    payload: response.data || null,
  });
};

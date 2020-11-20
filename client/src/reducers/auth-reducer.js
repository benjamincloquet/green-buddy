import USER from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return { ...state, isAuthenticated: action.payload !== null, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;

import {
  CHANGE_LOGIN_FIELD, SAVE_USER, UPDATE_USER, CLEAR_USER,
} from '../actions/user';

export const initialState = {
  email: 'user@user.com',
  password: 'user',
  current: {
    user: {
      id: 1,
      firstname: '',
      lastname: '',
      email: '',
      roles: '',
    },
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        current: action.data,
      };
    case UPDATE_USER:
      return {
        ...state,
        current: {
          ...state.current,
          user: action.data,
        },
      };
    case CLEAR_USER:
      return {
        ...state,
        current: {
          user: {
            id: 1,
            firstname: '',
            lastname: '',
            email: '',
            roles: '',
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;

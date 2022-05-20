import { CHANGE_LOGIN_FIELD, SAVE_USER } from '../actions/user';

export const initialState = {
  email: 'user@user.com',
  password: 'user',
  current: {
    user: {
      id: 1,
      firstname: '',
      lastname: '',
      email: '',
      roles: ['ROLE_USER'],
      association_id: 2,
      logged: false,
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
    default:
      return state;
  }
};

export default reducer;

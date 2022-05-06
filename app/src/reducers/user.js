import { CHANGE_USER_FIELD } from '../actions/user';

export const initialState = {
  email: ' Jean-Paul@hotmail.fr',
  password: 'password',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;

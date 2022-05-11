import { CHANGE_LOGIN_FIELD, SAVE_USER } from '../actions/user';

export const initialState = {
  email: 'jean@pipou.fr',
  password: 'Paul',
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
        userToken: action.JWTokenFromAPI,
      };
    default:
      return state;
  }
};

export default reducer;

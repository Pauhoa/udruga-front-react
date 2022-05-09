import { CHANGE_LOGIN_FIELD } from '../actions/user';

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
    default:
      return state;
  }
};

export default reducer;

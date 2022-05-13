import { CHANGE_LOGIN_FIELD, SAVE_USER } from '../actions/user';

export const initialState = {
  email: 'jean@pipou.fr',
  password: 'Paul',
  isLogged: false,
  current: {
    user: {
      id: 1,
      first_name: 'Jonhy',
      last_name: 'Walker',
      email: 'johnywalker@hotmail.fr',
      role: 'user',
      association_id: null,
    },
    token: 'mja33ddsslj999332JDL20ddzs92420',
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
